$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  // Thêm container cho các icon
  const iconContainer = $("#falling-icons-container");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    // Bắt đầu hiệu ứng rơi sau khi lá thư bắt đầu mở ra
    setTimeout(startIconFall, 600);
  }
  function close() {
    envelope.addClass("close").removeClass("open");
    // Dọn dẹp các icon khi đóng thư
    iconContainer.empty();
  }

  // Hàm mới để tạo hiệu ứng rơi
  function startIconFall() {
    const numberOfIcons = 25; // Số lượng icon bạn muốn

    for (let i = 0; i < numberOfIcons; i++) {
      const icon = $("<img>");
      icon.attr(
        "src",
        "https://www.freeiconspng.com/uploads/hello-kitty-png-icon-25.png"
      );
      icon.addClass("falling-icon");

      // Tạo các giá trị ngẫu nhiên
      const startLeft = Math.random() * 100; // Vị trí bắt đầu theo chiều ngang (%)
      const duration = Math.random() * 5 + 5; // Thời gian rơi từ 5-10 giây
      const delay = Math.random() * 6; // Độ trễ trước khi bắt đầu rơi (0-5 giây)

      icon.css({
        left: startLeft + "vw",
        animationDuration: duration + "s",
        animationDelay: delay + "s",
      });
      iconContainer.append(icon);

      // (Tùy chọn) Xóa icon khỏi HTML sau khi nó đã rơi xong để giữ cho trang web nhẹ
      setTimeout(() => {
        icon.remove();
      }, (duration + delay) * 1000);
    }
  }
});
