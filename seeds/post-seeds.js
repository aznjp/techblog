const { Post } = require('../models');

const postdata = [{
        title: 'The next big thing in javascript?',
        post_blog: 'I have no idea what to put into here',
        user_id: 1
    },
    {
        title: 'Can we get this challenge done in time?',
        post_blog: 'Maybe if the code decides to work in the same fashion',
        user_id: 2
    },
    {
        title: 'How much time is too much time to spend on a project?',
        post_blog: 'I dont know but this is giving me a headache',
        user_id: 3
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;