function followersTask(input) {

    let follower = {};

    for (const line of input) {
        if (line === 'Log out') {
            break;
        }

        let [command, username, count] = line.split(': ');


        switch (command) {


            case 'Comment':

                if (!follower.hasOwnProperty(username)) {

                    follower[username] = {
                        username: username,
                        countFollower: 0,
                        likes: 0
                    }
                }

                if (follower.hasOwnProperty(username)) {

                    follower[username].likes += 1

                } else {

                    follower[username].likes -= 1
                }

                break;
            case 'New follower':
                if (!follower.hasOwnProperty(username)) {

                    follower[username] = {
                        username: username,
                        countFollower: 0,
                        likes: 0
                    };
                }

                break;
            case 'Blocked':

                if (follower.hasOwnProperty(username)) {

                    delete (follower[username])
                } else {

                    console.log(`${username} doesn't exist.`);

                }

                break;
            case 'Like':
                if (!follower.hasOwnProperty(username)) {

                    follower[username] = {
                        username: username,
                        countFollower: 0,
                        likes: Number(count)
                    };


                } else {

                    follower[username].likes += Number(count);

                }
                break;
        }
    }

    let sumFollowers = Object.keys(follower).length;
    console.log(`${sumFollowers} followers`);

    for (const key in follower) {
        console.log(`${follower[key].username}: ${follower[key].likes}`);
    }
}

followersTask([
    "New follower: George",
    "New follower: George",
    "Like: George: 5",
    "Log out"
]);
console.log('-----');

followersTask(["Like: Katy: 3",
"Comment: Katy",
"New follower: Bob",
"Blocked: Bob",
"New follower: Amy",
"Like: Amy: 4",
"Log out"])

console.log('-----');

followersTask(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])




