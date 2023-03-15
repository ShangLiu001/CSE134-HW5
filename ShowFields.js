function showFields() {
    let method = document.getElementById("method").value;
    if (method == "post") {
      disableEverything();
      document.getElementById("article_name").disabled = false;
      document.getElementById("article_body").disabled = false;
      document.getElementById("postBtn").disabled = false;
    }
    if (method == "get") {
      disableEverything();
      document.getElementById("id").disabled = false;
      document.getElementById("getBtn").disabled = false;
    }
    if (method == "put") {
      disableEverything();
      document.getElementById("id").disabled = false;
      document.getElementById("article_name").disabled = false;
      document.getElementById("article_body").disabled = false;
      document.getElementById("putBtn").disabled = false;
    }
    if (method == "delete") {
      disableEverything();
      document.getElementById("id").disabled = false;
      document.getElementById("deleteBtn").disabled = false;
    }
  }

  function disableEverything() {
    document.getElementById("id").disabled = true;
    document.getElementById("article_name").disabled = true;
    document.getElementById("article_body").disabled = true;
    document.getElementById("id").value = "";
    document.getElementById("article_name").value = "";
    document.getElementById("article_body").value = "";
    document.getElementById("postBtn").disabled = true;
    document.getElementById("getBtn").disabled = true;
    document.getElementById("putBtn").disabled = true;
    document.getElementById("deleteBtn").disabled = true;
  }
