# CHANGELOG

## [unreleased]

## [v1.0.4] - 2018-01-24
- ADDED Ability to reset password
  - sends email to user if user exists
  - password reset token expires after an hour
- ADDED SSL support
- FIXED bugs
  - grant scenario access
  - Sign out blocking issue


## [v1.0.3] - 2018-01-23
- Added User profile and update password pages
- Added user controller tests

## [v1.0.2] - 2018-01-10
- corrected issues with genetics logic
  - overflow on REST bact
  - num phage generated with uneven input phage numbers
  - updated corresponding tests
- switched console output to debug