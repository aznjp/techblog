const { Comment } = require('../models');

const commentdata = [{
        comment_text: 'This is a test value.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Another comment added onto the text.',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Will this work or not?',
        user_id: 3,
        post_id: 3
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;