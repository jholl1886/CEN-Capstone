import mongoose from 'mongoose';

const replySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  username: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  like: {
    type: Boolean,
    required: false
  },
}, {
  timestamps: true,
});

const postSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      username: {
        type: String,
        required: true,
      },
      subject: {
        type: String,
        required: true,
        unique: true,
      },
      content: {
        type: String,
        required: true,
      },
      tag: {
        type: String,
        required: false,
      },

      replies: [replySchema]
    },
    {
      timestamps: true,
    }
  );
  
  
  const Post = mongoose.model('Post', postSchema);
  
  export default Post;