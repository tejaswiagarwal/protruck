Issues = new Mongo.Collection('issues');

Issues.attachSchema(new SimpleSchema({
  source:{
    type: String,
    label: "Source",
/*    autoform:  
      type: 'map'
      afFieldInput:
        geolocation: true
        searchBox: true
        autolocate: true 
*/  },
  destination:{
    type: String,
    label: "Destination",
/*    autoform:
      type: 'map'
      afFieldInput:
        geolocation: true
        searchBox: true
        autolocate: true            
*/  },
  pickupDate:
  {
    type: Date,
    label: "PickUp Date",
    optional: false
  },
  phone:
  {
    type: Number,
    label: "Phone",
    optional: false
  },
  createdBy: {
    type: String,
    autoValue: function() {
       return this.userId
    }
  }
}));

if (Meteor.isServer) {
  Issues.allow({
    insert: function (userId, doc) {
      return userId;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return userId;
    },

    remove: function (userId, doc) {
      return userId;
    }
  });
}
