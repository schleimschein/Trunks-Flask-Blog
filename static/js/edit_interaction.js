
    // Delete option
    (function() {
    var clickHandler = function () {
      var editId = document.getElementsByName(editType +"-edit-id")[0];
        if (typeof(editId) !== 'undefined' && editId != null) {
          editId = editId.value.trim();
          if (confirm("Are you sure you want to delete " + editType + " " + editId + "?")) {
            var url = "/admin/" + editType + "s" + "/delete";
            var data = JSON.stringify({id: editId, was_edit: true});

            var httpRequest = new XMLHttpRequest();
            httpRequest.open('POST', url);
            httpRequest.setRequestHeader("Content-Type", "application/json");

            httpRequest.onload = function () {
              if (JSON.parse(httpRequest.response)["ok"] === true) {
                window.location = "/admin/" + editType + "s";
              } else {
                location.reload(true);
              }
            };

            httpRequest.onerror = function () {
              alert("Delete request contained an error");
            };

            httpRequest.send(data);
          }
        } else {
          window.location = "/admin/" + editType + "s";
        }
   };

    var anchor = document.getElementById("action-delete-" + editType);
    anchor.addEventListener('click', clickHandler, false);
 })();