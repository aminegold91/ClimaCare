document.getElementById("bookingForm").addEventListener("submit", function(event) {
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
      fetch("AKfycbxniIHgj8iXJSf-V2bo0AhHJ8M5GR6T0TJeq5tsgLo", {
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
