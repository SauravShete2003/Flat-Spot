import { Schema, model } from "mongoose";

const inquirySchema = new Schema(
  {
    name: {
      require: true[
        {
          type: Schema.Types.objectId,
          ref: "user",
        }
      ],
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phoneNumber: {
      type: Number,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    flat: {
      required: true,
      objectId: [
        {
          type: Schema.Types.objectId,
          ref: "flat",
        },
      ],
    },

    status: {
      type: String,
      required: true,
      enum: ["new", "in Progress", "resolved"],
    },
  },
  {
    timestamp: true,
  }
);

const Inquiry = model("Inquiry", inquirySchema);
export default Inquiry;
