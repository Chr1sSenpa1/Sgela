import InstructorModelGenerated from "./generated/InstructorModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = InstructorModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await InstructorModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...InstructorModelGenerated,
  ...customModel
};
