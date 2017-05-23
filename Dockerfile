FROM ruby:2.4

RUN apt-get update && apt-get install -y \
      --fix-missing --no-install-recommends \
      build-essential nodejs \
      && rm -rf /var/lib/apt/lists/*
WORKDIR /
RUN git clone https://github.com/TerryHowe/rubymaze.git
WORKDIR /rubymaze
RUN bundle install
RUN bundle exec rake RAILS_ENV=production assets:precompile
RUN rails db:migrate RAILS_ENV=production

EXPOSE 4000
ENTRYPOINT ["/rubymaze/run.sh"]
