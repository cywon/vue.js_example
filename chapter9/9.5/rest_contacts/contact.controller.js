const Contact = require('./contact.model.js');

// 새로운 연락처 만들기
exports.create = (req, res) => {
  const contact = new Contact({ 
    contactId: req.body.contactId,
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    phone:req.body.phone
  });
  
  //데이터베이스에 새로운 연락처 저장하기 
  contact.save()
  .then(data => { res.send(data); })
  .catch(err => { 
    res.status(500).send({ message: err.message}); 
  });
};


//모든 연락처 검색
exports.findAll = (req, res) => {
  Contact.find()
  .then( contacts => { res.send(contacts);  })
  .catch(err => { 
    res.status(500).send({ message: err.message }); 
  });
};

//특정한 연락처 검색
exports.findOne = (req, res) => {
  Contact.findOne({contactId : req.params.contactId})
  .then( contact => {
    if(!contact){
      return res.status(404).send({
        message: req.params.contactId + "에 해당하는 연락처가 없습니다." }); 
    }
    res.send(contact);
  }).catch(err => { 
    return res.status(500).send({ message: req.params.contactId +" 로 검색 중 에러 발생" });
  });  
};

//업데이트
exports.update = (req, res) => { 
  Contact.findOneAndUpdate( {contactId:req.params.contactId}, 
    { contactId: req.body.contactId, name:req.body.name, email:req.body.email, 
     gender:req.body.gender, phone:req.body.phone }, 
    {new:true}
  )
  .then(contact => { 
    if(!contact) {
      return res.status(404).send({ message: req.params.contactId +
        "에 해당하는 연락처(contact) 발견되지 않았습니다." })
    }
    res.send(contact);
  }).catch(err => { 
    return res.status(500).send({ message: err.message });
  });
};

//삭제
exports.delete = (req, res) => {
  Contact.findOneAndDelete({contactId:req.params.contactId})
  .then(contact => {
    if(!contact) {
      return res.status(404).send({ message: req.params.contactId +"에 해당하는 연락처(contact)가 없습니다." })
    }
    res.send({ message: "정상적으로 " + req.params.contactId + " 연락처가 삭제되었습니다." })
  })
  .catch(err => {
    return res.status(500).send({ message: err.message }); 
  });
};








