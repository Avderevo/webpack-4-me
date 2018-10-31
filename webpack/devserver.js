module.exports = function() {
  return {
    devServer: {
       proxy: {
       '/users': 'http://127.0.0.1:8000',
        
      
     }
    },
  };
};