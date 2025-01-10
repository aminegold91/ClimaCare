document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // جلب البيانات من النموذج
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const type = document.getElementById("type").value;
  const problem = document.getElementById("problem").value;
  const date = document.getElementById("date").value;

  // عرض رسالة تأكيد
  alert(`شكراً ${name}، تم إرسال طلبك بنجاح! سنتواصل معك قريباً.`);

  // مسح الحقول بعد الإرسال
  document.getElementById("bookingForm").reset();
});
