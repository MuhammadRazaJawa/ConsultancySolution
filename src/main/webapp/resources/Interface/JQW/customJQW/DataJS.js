  var data = new Array();

  var firstNames = [
      "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"];

  var lastNames = [
      "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"];

  var productNames = [
      "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Cramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"];

  var priceValues = [
      "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"];

  for (var i = 0; i < 200; i++) {
      var row = {};
      var productindex = Math.floor(Math.random() * productNames.length);
      var price = parseFloat(priceValues[productindex]);
      var quantity = 1 + Math.round(Math.random() * 10);

      row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
      row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
      row["productname"] = productNames[productindex];
      row["price"] = price;
      row["quantity"] = quantity;
      row["total"] = price * quantity;

      data[i] = row;
  }

  var source = {
      localData: data,
      dataType: "array",
      dataFields: [{
          name: 'firstname',
          type: 'string'
      }, {
          name: 'lastname',
          type: 'string'
      }, {
          name: 'productname',
          type: 'string'
      }, {
          name: 'quantity',
          type: 'number'
      }, {
          name: 'price',
          type: 'number'
      }, {
          name: 'total',
          type: 'number'
      }]
  };

  var dataAdapter = new $.jqx.dataAdapter(source);

  $("#table").jqxDataTable({
      width: 500,
      theme: 'energyblue',
      pageable: true,
      rendering: function () {
          if ($(".jqx-buttons").length > 0) {
              $(".jqx-buttons").jqxButton('destroy');
          }
      },
      rendered: function () {
          $(".jqx-buttons").jqxButton({
              theme: "energyblue"
          });
      },
      source: dataAdapter,
      columns: [{
          text: 'Name',
          dataField: 'firstname',
          width: 215
      }, {
          text: 'Last Name',
          dataField: 'lastname',
          width: 210
      }, {
          text: 'Buttons',
          editable: false,
          dataField: "",
          cellsRenderer: function (row, column, value) {
              return "<input type='button' value='Click Me' class='jqx-buttons'/>";
          }
      }]
  });