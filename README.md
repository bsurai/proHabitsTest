# Installation and start

You should install packages and start app separately on client and server.

Server
```
cd server
npm i
npm start
```
Client
```
cd client
npm i
npm start
```

# Users
App has two registered users. When you start authorization, you should pass credentials one of them.
```
user: user1@mymail.com
pass: 1111
```
or another one
```
user: user2@mymail.com
pass: 1111
```


# Login and logout
Buttons login and logout are situated on page's top. You can see only one button. Which one is depending on current logged status.
Logged status will expire in every 5 minutes.


# Schemats
I had found a convenient decision how to use [schemats](https://github.com/SweetIQ/schemats). 
Here are more [details](https://github.com/SweetIQ/schemats/issues/56).



# Database backup
Here is mine database [backup](https://www.dropbox.com/sh/od2gm66fgrwllvh/AAA1KkhzPbUwMrqu5mo7b2tsa?dl=0).


# Database tables description
There are 5 tables in a database:

1) users - All users with their names (nicknames).

2) commitments - All possible challenges (commitments) with no refs to users.

3) quotes - Every chalenge may have ref to excited quotes (citations). Here they are.

4) users_commitments - Indicates which challenges are relevant to users.

5) users_activity - It's story of users everyday activity. Here we can get info about what challenges user has start/complete in a day (period).


# Algorithm of getting challenge

1) When user is logging first time a day, app is searching challenges relevant to user with random order (users_commitments table). One challenge will be passed to users_activity table. New row in users_activity table will contain fields status=0 and day=today.

2) If user has open (status either 0 or 1) challenge today, then app will back this challenge first. Non opened challenges have lowless priority than opened challenge. User can has no more one opened challenge at the moment.

3) When user has completed the challenge, challenge is getting status 2 in users_activity table. After the event app will get next challenge relevant to user in users_commitments table.

4) App will return today's completed challenge, when user has completed all his today's challenges. User can't change status of completed challenge. It means user has done good work today. He can come back tomorrow and do it again.
