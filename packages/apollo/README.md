[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/jellydn/daily-learning/tree/master/packages/apollo)

# Apollo example

## How to use

### Download manually

Download the example [or clone the repo](https://github.com/jellydn/daily-learning):

```bash
curl https://codeload.github.com/jellydn/daily-learning/tar.gz/master | tar -xz --strip=2 daily-learning-master/packages/apollo
cd apollo
```

Install it and run:

```bash
npm install
npm run start
# or
yarn
yarn start
```

### Copy ENV file and change the configuration

```bash
cp .env.example .env
```

## The idea behind the example

This is an example for get top 10 open source projects from github with `apollo stack` (`react`, `graphql`)
