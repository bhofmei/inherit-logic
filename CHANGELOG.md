# CHANGELOG

## [unreleased]
- fixed issue with potential incorrect error dropping bact tube to plate directly

## [v1.0.8] - 2018-02-26
- Save parent id of phage from plate to fridge
- Get parent info about phage when getting fridge
- Display phage parent strain number in dialog

## [v1.0.7] - 2018-02-23
- UPDATED the way phage mutations are stored to save memory
  - updated all genetics components
  - updated model
  - updated front end interface and pipe
- UPDATED on rest bacteria, only WT-like genotypes sent to client so smaller data transfer
- REMOVED rate limiting (causing server errors)
- FIXED over capacity for plexer
- ADDED "Page not found" component for invalid URL
- ADDED shuffle plaque lists to force mutants and recombinants to the front
  - When small/large plaques 100-400
  - Handle and shuffle each separately

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