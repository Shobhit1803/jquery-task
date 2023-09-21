$(document).ready(function () {
  var array = [];

  var newdata = JSON.parse(localStorage.getItem("key"));
  // console.log(newdata, "11111111111");


  if (newdata) {

    for (i = 0; i < newdata.length; i++) {
      var section = $(`<section><h1> ${newdata[i].heading} <button class="btn-close sectionbtn"></button></h1></section>`);
      $("main").sortable({
        items: "section",
        handle: "h1",
        connectWith: "main",
      });
      $(".form1").trigger("reset")
      $(".i2").find("option").remove();
      $(".i2").append(`<option>  Select Heading </option>`);
      $(".i4").find("option").remove();
      $(".i4").append(`<option>  Select Heading </option>`);

      $(section).each(function (index, value) {
        $(".i2").append('<option value=' + (index + 1) + '>' + $(this).text() + '</option>');
        $(".i4").append('<option value=' + (index + 1) + '>' + $(this).text() + '</option>');
      });

      $(section).on("click", ".sectionbtn", function () {
        var sectionIndex = $(this).parent().parent().index();
        newdata.splice(sectionIndex, 1);
        localStorage.setItem("key", JSON.stringify(newdata));
        $(this).parent().parent().remove();
      });

      for (j = 0; j < newdata[i].subheading.length; j++) {
        var div = $(`<div><h3> ${newdata[i].subheading[j].subheading} <button class="btn-close divbtn"></button></h3></div>`);
        $(section).sortable({
          items: "div",
          handle: "h3",
          connectWith: "section",
        });

        $(".i4").change(function (e) {
          e.preventDefault();
          var Heading = $(".i4 option:selected").val();
          // console.log(Heading, '888888888888888');
          $(".i5").find("option").remove();
          $(".i5").append(`<option value=''>  Select Subheading </option>`);
          $(`main section:nth-child(${Heading}) div h3`).each(function (index, value) {
            $(".i5").append('<option value=' + (index + 1) + '>' + $(this).text() + '</option>');
          });
        });

        $(".form2").trigger("reset")
        $(div).on("click", ".divbtn", function () {
          var divIndex = $(this).parent().parent().index() - 1;
          var sectionIndex = $(this).closest('section').index();
          newdata[sectionIndex].subheading.splice(divIndex, 1);
          localStorage.setItem("key", JSON.stringify(newdata));
          $(this).parent().parent().remove();
        });

        for (let k = 0; k < newdata[i].subheading[j].input.length; k++) {
          if (newdata[i].subheading[j].input[k].inputvalue == "text") {
            var span = `<span><label> ${newdata[i].subheading[j].input[k].label} <input type= "text" value="${newdata[i].subheading[j].input[k].value}" /><button class="btn-close spanbtn"></button></label></span><br>`;
            $(div).append(span);
          }
          else if (newdata[i].subheading[j].input[k].inputvalue == "button") {
            var span = `<span><label> ${newdata[i].subheading[j].input[k].label} <input type= "button" value="${newdata[i].subheading[j].input[k].name}" /><button class="btn-close spanbtn"></button></label></span><br>`;
            $(div).append(span);
          }
          else if (newdata[i].subheading[j].input[k].inputvalue == "email") {
            var span = `<span><label> ${newdata[i].subheading[j].input[k].label} <input type= "button" value="${newdata[i].subheading[j].input[k].name}" /><button class="btn-close spanbtn"></button></label></span><br>`;
            $(div).append(span);
          }
          else if (newdata[i].subheading[j].input[k].inputvalue == "file") {
            var span = `<span><label> ${newdata[i].subheading[j].input[k].label} <input type= "button" value="${newdata[i].subheading[j].input[k].name}" /><button class="btn-close spanbtn"></button></label></span><br>`;
            $(div).append(span);
          }
          else if (newdata[i].subheading[j].input[k].inputvalue == "number") {
            var span = `<span><label> ${newdata[i].subheading[j].input[k].label} <input type= "button" value="${newdata[i].subheading[j].input[k].name}" /><button class="btn-close spanbtn"></button></label></span><br>`;
            $(div).append(span);
          }
          else if (newdata[i].subheading[j].input[k].inputvalue == "textarea") {
            var span = `<span><label> ${newdata[i].subheading[j].input[k].label} <input type= "button" value="${newdata[i].subheading[j].input[k].name}" /><button class="btn-close spanbtn"></button></label></span><br>`;
            $(div).append(span);
          }
          else if (newdata[i].subheading[j].input[k].inputvalue == "radio") {
            var form = '';
            for (x = 0; x < newdata[i].subheading[j].input[k].options.length; x++) {
              form += `<input type='radio' name="dynamicRadio" value="${newdata[i].subheading[j].input[k].options[x]}"> ${newdata[i].subheading[j].input[k].options[x]}`
            };
            var span = `<span><label> ${newdata[i].subheading[j].input[k].value} <option> ${form} </option><button class="btn-close spanbtn"></button></label></span><br>`;
            $(div).append(span);
          }
          else if (newdata[i].subheading[j].input[k].inputvalue == "checkbox") {
            var form = '';
            for (y = 0; y < newdata[i].subheading[j].input[k].options.length; y++) {
              form += `<input type="checkbox" value="${newdata[i].subheading[j].input[k].options[y]}"> ${newdata[i].subheading[j].input[k].options[y]}`
            };
            var span = `<span><label> ${newdata[i].subheading[j].input[k].value} <option> ${form} </option><button class="btn-close spanbtn"></button></label></span><br>`;
            $(div).append(span);
          }
          else if (newdata[i].subheading[j].input[k].inputvalue == "select") {
            var form = '';
            for (z = 0; z < newdata[i].subheading[j].input[k].options.length; z++) {
              form += `<option> ${newdata[i].subheading[j].input[k].options[z]} </option>`
            };
            var span = `<span><label> ${newdata[i].subheading[j].input[k].value} <option> ${form} </option><button class="btn-close spanbtn"></button></label></span><br>`;
            $(div).append(span);
          }
          
          $(div).on("click", ".spanbtn", function () {
            var spanIndex = $(this).parent().index();
            var divIndex = $(this).closest("div").index() - 1;
            var sectionIndex = $(this).closest("section").index();
            newdata[sectionIndex].subheading[divIndex].input.splice(spanIndex, 1);
            localStorage.setItem("key", JSON.stringify(newdata));
            $(this).parent().remove();
          });
          $(div).sortable({
            items: "span",
            handle: "label",
            connectWith: "div",
          });

        }
        $(section).append(div);
      }
      $("main").append(section);
    }
  }



  $('.form1').submit(function (e) {
    e.preventDefault();
    var Heading = $(".i1").val();
    $("main").append('<section><h1>' + Heading + '<button class="btn-close sectionbtn"></button></h1></section>');
    
    $("main").sortable({
      items: "section",
      handle: "h1",
      connectWith: "main",
    });

    $(".form1").trigger("reset")
    $("section").on("click", ".sectionbtn", function () {
      $(this).parent().parent().remove()
    });

    $(".i2").find("option").remove();
    $(".i2").append(`<option>  Select Heading </option>`);
    $(".i4").find("option").remove();
    $(".i4").append(`<option>  Select Heading </option>`);


    $("main section h1").each(function (index, value) {
      $(".i2").append('<option value=' + (index + 1) + '>' + $(this).text() + '</option>');
      $(".i4").append('<option value=' + (index + 1) + '>' + $(this).text() + '</option>');
      // console.log(Heading,'4444444444444');
    });

    array.push({ "heading": Heading, "subheading": [] });
    localStorage.setItem("key", JSON.stringify(array));

    $('#1').modal('hide');

  });

  $('.form2').submit(function (e) {
    e.preventDefault();
    var Heading = $(".i2 option:selected").val();
    // console.log(Heading,'222222222222222222222222');
    var Subheading = $(".i3").val();
    $(`main section:nth-child(${Heading})`).append(`<div><h3> ${Subheading} <button class="btn-close divbtn"></button></h3></div>`);
    $("section").sortable({
      items: "div",
      handle: "h3",
      connectWith: "section",
    });

    $(".form2").trigger("reset")
    $("div").on("click", ".divbtn", function () {
      $(this).parent().parent().remove()
    });

    $(".i4").change(function (e) {
      e.preventDefault();
      var Heading = $(".i4 option:selected").val();
      // console.log(Heading, '888888888888888');
      $(".i5").find("option").remove();
      $(".i5").append(`<option value=''>  Select Subheading </option>`);
      $(`main section:nth-child(${Heading}) div h3`).each(function (index, value) {
        $(".i5").append('<option value=' + (index + 1) + '>' + $(this).text() + '</option>');
      });
    });

    array[Heading - 1].subheading.push({ "subheading": Subheading, "input": [] });
    localStorage.setItem("key", JSON.stringify(array));

    $('#2').modal('hide');

  });

  $(".form3").submit(function (e) {
    e.preventDefault();
    var Heading = $(".i4 option:selected").val();
    var Subheading = $(".i5 option:selected").val();
    var sub = parseInt(Subheading) + 1;
    var ipt = $(".i6").val();
    var label = $(".i7").val();
    var value = $(".i8").val();
    var name = $(".i9").val();
    var placeholder = $(".i10").val();
    var options = $(".i11").val().split(",");

    array[Heading - 1].subheading[Subheading - 1].input.push({ "inputvalue": ipt, "label": label, "value": value, "name": name, "placeholder": placeholder, "options": options });
    localStorage.setItem("key", JSON.stringify(array));


    if (ipt == "text") {
      $(`main section:nth-child(${Heading}) div:nth-child(${sub})`).append(`<span><label>` + label + `<input type= ` + ipt + ` value="` + value + `" /><button class="btn-close spanbtn"></button></label></span><br>`);
    }
    else if (ipt == "button") {
      $(`main section:nth-child(${Heading}) div:nth-child(${sub})`).append(`<span><label>` + label + `<button> ` + name + ` </button><button class="btn-close spanbtn"></button></label></span><br>`);
    }
    else if (ipt == "email") {
      $(`main section:nth-child(${Heading}) div:nth-child(${sub})`).append(`<span><label>` + label + `<input type= ` + ipt + ` value="` + name + `" /><button class="btn-close spanbtn"></button></label></span><br>`);
    }
    else if (ipt == "file") {
      $(`main section:nth-child(${Heading}) div:nth-child(${sub})`).append(`<span><label>` + label + `<input type= ` + ipt + ` value="` + name + `" /><button class="btn-close spanbtn"></button></label></span><br>`);
    }
    else if (ipt == "number") {
      $(`main section:nth-child(${Heading}) div:nth-child(${sub})`).append(`<span><label>` + label + `<input type= ` + ipt + ` value="` + name + `" /><button class="btn-close spanbtn"></button></label></span><br>`);
    }
    else if (ipt == "textarea") {
      $(`main section:nth-child(${Heading}) div:nth-child(${sub})`).append(`<span><label>` + label + `<input type= ` + ipt + ` value="` + name  + `" /><button class="btn-close spanbtn"></button></label></span><br>`);
    }
    else if (ipt === "radio") {
      var form = '';
      for (i = 0; i < options.length; i++) {
        form += `<input type='radio' name="dynamicRadio" value="${options[i]}"> ${options[i]}`
      };
      $(`main section:nth-child(${Heading}) div:nth-child(${sub})`).append(`<span><label> ${value} <option> ${form} </option><button class="btn-close spanbtn"></button></label></span><br>`);
    }
    else if (ipt == "checkbox") {
      var form = '';
      for (i = 0; i < options.length; i++) {
        form += `<input type="checkbox" value="${options[i]}"> ${options[i]}`
      };
      $(`main section:nth-child(${Heading}) div:nth-child(${sub})`).append(`<span><label> ${value} <option> ${form} </option><button class="btn-close spanbtn"></button></label></span><br>`);
    }
    else if (ipt == "select") {
      var form = '';
      for (i = 0; i < options.length; i++) {
        form += `<option> ${options[i]} </option>`
      };
      $(`main section:nth-child(${Heading}) div:nth-child(${sub})`).append(`<span><label> ${value} <select> ${form} </select><button class="btn-close spanbtn"></button></label></span><br>`);
    }
    $("div").sortable({
      items: "span",
      handle: "label",
      connectWith: "div",
    });
    $("span").on("click", ".spanbtn", function () {
      $(this).parent().remove()
    })

    $('#3').modal('hide');

  });

});



