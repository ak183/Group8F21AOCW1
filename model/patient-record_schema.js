const mongoose= require('mongoose')

const Record= new mongoose.Schema({
    patient_id:{type:String,required:true},
    complaint_history:[
                        {
                            _id:false,
                            complaint_id:{type:mongoose.Types.ObjectId},
                            doctor_name:{type:String},
                            doctor_id:{type:String},
                            date:{type:String,default:Date.now()},
                            complaints:[{type:String}],
                            interpretation:[{type:String}],
                            medication:[{
                                            _id:false,
                                            medicine_name:{type:String},
                                            usage_type:{type:String},
                                            morning:{type:Boolean},
                                            afternoon:{type:Boolean},
                                            night:{type:Boolean},
                                            days:{type:Number},
                                            quantity:{type:Number},
                                            notes:{type:String}
                                        }]
                        }
                      ],
    labtest:[
                {
                    _id:false,
                    labtest_id:{type:mongoose.Types.ObjectId},
                    date:{type:String,default:Date.now()},
                    complaint_id:{type:String},
                    documents:[{type:String}],
                    test_suggested:[{type:String}],
                    test_result:[{       
                                    test: { type: String },
                                    comment: {type:String}   
                                }]
                }
            ]
})

module.exports=mongoose.model('patient_record',Record)