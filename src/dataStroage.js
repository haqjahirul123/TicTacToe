
 Storage.prototype.getObject = function (key) {
    return JSON.parse(this.getItem(key));
  };

  Storage.prototype.copyContent = function () {
    const keyValuePairs = Object.entries(this);
    this.clear();
    return keyValuePairs;
  };
  
  Storage.prototype.restoreContent = function (content) {
    this.clear();
    for (let [key, value] of content) {
      this.setItem(key, value);
    }
  };
  
  