[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/jellydn/daily-learning/tree/master/packages/extensible-duck)

# An example for bundling reducers, action types and actions when using Redux

## How to use

### Download manually

Download the example [or clone the repo](https://github.com/jellydn/daily-learning):

```bash
curl https://codeload.github.com/jellydn/daily-learning/tar.gz/master | tar -xz --strip=2 daily-learning-master/packages/extensible-duck
cd extensible-duck
```

Install it and run:

```bash
npm install
npm run start
# or
yarn
yarn start
```

## The idea behind the example

This is an example for implement [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux) with `react` and `redux`. It would help to remove boilerplate code and easy to scale for big project.