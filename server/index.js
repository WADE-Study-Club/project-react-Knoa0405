import express from 'express';

import mongoose from 'mongoose';

import bodyParser from 'body-parser';

import cookieParser from 'cookie-parser';

import User from './models/User.js';

import City from './models/City.js';

import config from './config/key.js';

import auth from './middleware/auth.js';

const { log, error } = console;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cookieParser());

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,
}).then(() => log('MongoDB connected'))
  .catch((err) => error(err));
// 유저별로 정보를 다르게 받아서 뿌려줘야한다. 지금은 그냥 전부 cities collections 에 위치해 있다.
app.post('/api/userCities', (req, res) => {
  City.findOne({ name: req.body.name }, (err, city) => {
    if (city) {
      return res.json({
        registerSuccess: false,
        message: '이미 등록된 도시입니다.',
      });
    } else {
      const city = new City(req.body);

      city.save((err, cityInfo) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
          registerSuccess: true,
          city,
          message: '해당 도시가 등록되었습니다.',
        })
      });
    }
  })
});

app.get('/api/userCities', (req, res) => {
  City.find({}, (err, cities) => {
    return res.json({
      cities,
    });
  });
})

app.post('/api/users/register/dupliEmailCheck', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      return res.json({
        signUpSuccess: false,
        message: '이미 존재하는 이메일입니다.',
      });
    } else {
      return res.json({
        signUpSuccess: true,
        message: '사용 가능한 이메일입니다.',
      });
    }
  });
});

app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post('/api/users/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '제공된 이메일에 해당하는 유저가 없습니다.',
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) { return res.json({ loginSuccess: false, message: '비밀번호가 틀렸습니다.' }); }

      user.generateToken((err, savedUser) => {
        if (err) return res.status(400).send(err);

        res.cookie('x_auth', savedUser.token)
          .status(200)
          .json({ loginSuccess: true, userId: savedUser.id });
      });
    });
  });
});

app.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role !== 0,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id },
    { token: '' },
    (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    });
});

const port = 5000;

app.listen(port, () => log(`Example app listening on port ${port}`));
