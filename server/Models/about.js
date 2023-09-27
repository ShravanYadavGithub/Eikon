const mongoose = require('mongoose');
const { Schema } = mongoose;

const aboutSchema = new Schema({
   
        title: String,
        description: String,
        descriptionSub1:String,
        descriptionSub2:String,
        descriptionSub3:String,
        DrTeamList:[{ Name: String,
                Post: String,
                description:String,
                image:String
        }],
name:String,
        testimonial:{
                title:String,
                description:String
        },
        userReview:[{
                Name:String,
                Patient:String,
                description:String,
                image:String
              }],
        counterPage: {
                title: String,
                HappyPatients: {
                  title: String,
                  count: Number
                },
                HospitalRoom: {
                  title: String,
                  count: Number
                },
                QualifiedDoctor: {
                  title: String,
                  count:Number
                },
                PositiveFeedback: {
                  title: String,
                  count: Number
                }
              }

});

exports.about = mongoose.model('about', aboutSchema);
