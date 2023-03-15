  function deleteMethod() {
    let implementation = document.getElementById("HTTP").value;
    if (implementation == "XMLHttpRequest") {
      let xmlreq = new XMLHttpRequest();
      xmlreq.open("DELETE", "https://httpbin.org/delete");
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
      xmlreq.send();
    } else {
      fetch("https://httpbin.org/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
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