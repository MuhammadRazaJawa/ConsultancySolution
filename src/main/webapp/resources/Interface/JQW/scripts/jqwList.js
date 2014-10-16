   $(document).ready(function () {
        
        	var data = "/project/viewAllCurrentStudiesJson";
        	
          // var data = [{"currentStudiesId":1,"programTitle":"test","university":"test","startDate":"test","endDate":"test","higherLevelOfQualification":"test","expectedDateOfCompletion":"drfdf","haveStudiedAbroad":true,"generalDetailId":{"generalDetailId":1,"firstName":"Raza","fatherName":"Fazal","age":24,"country":"pakistan","city":"Lahore","mobileNumber":"03454737824","otherContact":"03110237824","firstLanguage":"Urdu","nic":"3520014376079","status":"inactive","email":"mrjawa@gmail.com","passport":"12345"}},{"currentStudiesId":2,"programTitle":"qqq","university":"qqq","startDate":"2014-08-11","endDate":"2014-08-20","higherLevelOfQualification":"qqqq","expectedDateOfCompletion":"2014-08-14","haveStudiedAbroad":true,"generalDetailId":{"generalDetailId":2,"firstName":"waqas","fatherName":"faheem","age":76,"country":"india","city":"Lahore","mobileNumber":"03224281032","otherContact":"03221541245","firstLanguage":"Punjabi","nic":"4209211","status":"inactive","email":"Gatu@gmail.com","passport":"54321"}},{"currentStudiesId":3,"programTitle":"Accounts","university":"London","startDate":"2014-08-19","endDate":"2014-08-06","higherLevelOfQualification":"Phd","expectedDateOfCompletion":"2014-08-30","haveStudiedAbroad":true,"generalDetailId":{"generalDetailId":3,"firstName":"Ali","fatherName":"Hassan","age":5,"city":"Lahore","mobileNumber":"12345","otherContact":"54321","firstLanguage":"eng","nic":"65656","status":"inactive","email":"ggg@gmail.com"}}];
   
          
          
          // prepare the data
            var source =
            {
                dataType: "json",
                localdata: data,
                dataFields: [
                    { name: 'currentStudiesId', type: 'int' },
                    { name: 'programTitle', type: 'string' },
                    { name: 'university', type: 'string' },
                    { name: 'startDate', type: 'string' },
                    { name: 'endDate', type: 'string' },
                    { name: 'higherLevelOfQualification', type: 'string' },
                    { name: 'expectedDateOfCompletion', type: 'string'  },
                    { name: 'haveStudiedAbroad', type: 'string' },
                    { name: 'clientName', map: 'generalDetailId>firstName' }
               
                ],
                id: 'id',
                data: data
            };
            
            var dataAdapter = new $.jqx.dataAdapter(source);
            $("#dataTable").jqxDataTable(
            {
                width: 1400	,
                pageable: true,
                pagerButtonsCount: 10,
                columnsResize: true,
                source: dataAdapter,
                filterable: true,
                columns: [
                  { text: 'Sr.#', dataField: 'currentStudiesId' , width:60},
                  { text: 'Program Title', dataField: 'programTitle', width: 240},
                  { text: 'University', dataField: 'university', width: 240},
                  { text: 'Start (Date)', dataField: 'startDate', width: 130},
                  { text: 'End (Date)', dataField: 'endDate', width: 130},
                  { text: 'Highest Qual', dataField: 'higherLevelOfQualification' , width: 200},
                  { text: 'Expected DOC', dataField: 'expectedDateOfCompletion' , width: 200},
                  { text: 'Studied Abroad(Y/N)', dataField: 'haveStudiedAbroad', width: 200 },
                  { text: 'clientName', dataField: 'clientName', width: 200 }
                
               
              ]
            });
            
        });
