
function putMethod() {
    let id = document.getElementById("id").value;
    let article_name = document.getElementById("article_name").value;
    let article_body = document.getElementById("article_body").value;
    let date = new Date();
    let data = JSON.stringify({
      id: id,
      article_name: article_name,
      article_body: article_body,
      date: date,
    });

    let implementation = document.getElementById("HTTP").value;
    if (implementation == "XMLHttpRequest") {
      let xmlreq = new XMLHttpRequest();
      xmlreq.open("PUT", "https://httpbin.org/put");
      xmlreq.setRequestHeader("Content-Type", "application/json");
      xmlreq.onreadystatechange = () => {
        if (xmlreq.readyState === xmlreq.DONE && xmlreq.status === 200) {
          let response = JSON.parse(xmlreq.responseText);
          document.getElementById("response").innerHTML = JSON.stringify(
            response,
            undefined,
            10
          );
        }
      };
      xmlreq.send(data);
    } else {
      fetch("https://httpbin.org/put", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("response").innerHTML = JSON.stringify(
            data,
            undefined,
            10
          );
        });
    }
  }