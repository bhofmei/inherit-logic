# CHANGELOG

## [unreleased]

## [v1.0.6] - 2018-02-20
- FIXED recombination error which was under-generating recombinants
- ADDED ability to delete non-admin users
- ADDED ability to delete course
- REMOVED revoke access option on user fridges

## [v1.0.5]
- ADDED rate limiting
    - genetics routes
    - user auth/update routes
- UPDATED backend genetics testing

## [v1.0.4] - 2018-01-24
- ADDED Ability to reset password
  - sends email to user if user exists
  - password reset token expires after an hour
- ADDED SSL support
- FIXED bugs
  - grant scenario access
  - Sign out blocking issue

## [v1.0.3] - 2018-01-23
- ADDED User profile and update password pages
- ADDED user controller tests

## [v1.0.2] - 2018-01-10
- FIXED issues with genetics logic
  - overflow on REST bact
  - num phage generated with uneven input phage numbers
  - updated corresponding tests
- switched console output to debug