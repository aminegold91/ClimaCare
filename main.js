

function send(){
let nember  = '+212767576688';
let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let address = document.getElementById("address").value;
let type = document.getElementById("type").value;
let problem = document.getElementById("problem").value;
let date = document.getElementById("date").value;
var url = 'https://wa.me/' + nember + '?text=' + ' الاسم : ' + name + '%0a'
+ 'رقم الهاتف  : ' + phone + '%0a'
+ 'العنوان : ' + address + '%0a'
+ 'النوع : ' + type + '%0a'
+ 'وصف المشكلة :' + problem + '%0a%0a'
+ 'التاريخ : ' + date + '%0a';
window.open(url , '_blanck').focus();
}



/*document.getElementById("bookingForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      // جلب البيانات من النموذج
      const formData = {
          name: document.getElementById("name").value,
          phone: document.getElementById("phone").value,
          address: document.getElementById("address").value,
          type: document.getElementById("type").value,
          problem: document.getElementById("problem").value,
          date: document.getElementById("date").value,
      };
  
      // إرسال البيانات إلى Google Sheets
      fetch("https://script.google.com/macros/s/AKfycbzN5Mrc_PtjAOZtkZycge3PNng9i91OhjzXitSK14DgaTw6G0sgD8Rmpt5xOi_rWHC2/exec", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
              "Content-Type": "application/json",
          },
      })
          .then((response) => response.text())
          .then((data) => {
              alert("تم إرسال طلبك بنجاح!");
              document.getElementById("bookingForm").reset();
          })
          .catch((error) => {
              alert("حدث خطأ أثناء إرسال الطلب.");
              console.error(error);
          });
  });
  */


