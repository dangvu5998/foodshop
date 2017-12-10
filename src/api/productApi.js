let products = [
  {id: "1", name: "Nem chua rán", cost: 5000, description: "Nem chua rán là món ăn vặt quen thuộc của các tín đồ ăn vặt. Vỏ nem giòn, vàng ruộm, bên trong nem vẫn có vị mềm của thịt, thơm và ngậy. Món nem chua rán là món ăn khoái khẩu, có khả năng mê hoặc mọi thực khách bất kể trời nóng hay lạnh. Còn gì tuyệt vời hơn khi được ngồi cùng", image: "/assets/images/nem-chua-ran_thum-1039.png", category: "mon-ran"},
  {id: "2", name: "Bánh rán mặn", cost: 6000, description: "Bánh rán mặn là món ăn không thể thiếu với nhiều người mỗi khi trời bắt đầu trở rét, và món ăn vặt này được ưa chuộng đến hết cả mùa đông lạnh lẽo. Nó cũng trở thành món ăn tráng miệng trong các buổi tiệc hoặc ăn vặt của chị em phụ nữ. Đơn giản nhất bạn có thể ăn bánh rán mặn", image: "/assets/images/banh-ran-man_thum-1041.png", category:"mon-ran"},
  {id: "3", name: "Phô mai que", cost: 7000, description: "Phô mai que là món ăn vặt khá phổ biến, đặc biệt là trào lưu trà chanh phô mai que chém gió của các bạn teen. Nhưng hiện nay nhiều quán làm phô mai que bằng nguyên liệu độc hại, nguy hiểm cho người ăn. Nhằm mang đến cho khách hàng món ăn đảm bảo chất lượng Quà Vặt Việt chính thức đưa vào", image: "/assets/images/pho-mai-que_thum-1043.png", category:"mon-ran"},
  {id: "4", name: "Nem lụi", cost: 7000, description: "Những chiếc nem lụi được nướng vàng ươm, thơm phức trên bếp than hồng, ăn kèm với các loại rau sống thơm mát, chấm với nước lèo, hoặc chấm với nước châm chua ngọt theo khẩu vị ngoài Bắc đặc biệt thơm ngon. Quà Vặt Việt là đơn vị bán hàng Online đầu tiên ở Hà Nội đưa món nem lụi nổi tiếng của miền trung", image: "/assets/images/nem-lui_thum-1117.png", category:"mon-ran"},
  {id: "5", name: "Bánh gối", cost: 10000, description: "Bánh gối là một trong những món ăn quen thuộc và hấp dẫn của ẩm thực dân dã Hà thành, không thể thiếu trong những ngày trời se lạnh. Mặc dù nó có mặt cả trong các nhà hàng sang trọng, nhưng ký ức về nó gắn với thú ăn chơi nhẹ nhàng, “la cà vỉa", image: "/assets/images/banh-goi_thum-1042.png", category:"mon-ran"},
  {id: "6", name: "Xúc xích đức việt", cost: 12000, description: "Được chế biến từ nguyên liệu chính là thịt heo (>70%) Sử dụng gia vị nhập khẩu từ châu Âu, kết hợp hương vị Việt. Các thành phần thịt được xay nhỏ và băm nhuyễn, phối trộn gia vị bằng các máy xay ở quy mô công nghiệp. Sản phẩm được hong khói bằng gỗ cây sồi gai, mang lại hương vị riêng rất đặc trưng", image: "/assets/images/xuc-xich-duc-viet_thum-1076.png", category:"mon-ran", promotion: 10000},
  {id: "7", name: "Chim quay", cost: 55000, description: "Món chim cút  quay nóng giòn, với thịt chim cút mềm, kết hợp với mùi thơm của các loại gia vị đặc biệt tạo nên một món ăn thật hấp dẫn với tất cả mọi người. Đây là một món ăn đã có từ lâu và thường xuất hiện ở trong thực đơn của các đám cưới, trong các nhà hàng sang trọng", image: "/assets/images/chim-quay_thum-1135.png", category:"mon-ran", promotion: 50000},
  {id: "8", name: "Bánh bao chiên", cost: 30000, description: "Chiều mùa đông được lót dạ với những chiếc bánh bao chay chiên giòn giòn cùng sữa đặc ngọt ngào thì còn gì bằng. Bánh bao chay chiên nhưng khi ăn rất giòn, thơm mùi sữa đặc ăn cùng thật tuyệt vời phải không các bạn.", image: "/assets/images/banh-bao-chien_thum-1044.png", category:"mon-ran"},
  {id: "9", name: "Sinh tố xoài", cost: 20000, description: "Trong những ngày hè nóng bức, ly sinh tố xoài với màu vàng hấp dẫn, vị ngọt ngậy mát lành chắc chắn sẽ khiến cả nhà thích mê.", image: "/assets/images/sinh-to-xoai_thum-1022.png", category: "sinh-to"},
  {id: "10", name: "Sinh tố dưa hấu", cost: 25000, description: "Dưa hấu (tên khoa học: Citrullus lanatus) là một loài thực vật trong họ Bầu bí (Cucurbitaceae), một loại trái cây có vỏ cứng, chứa nhiều nước, có nguồn gốc từ miền nam châu Phi và là loại quả phổ biến nhất trong họ Bầu bí. ", image: "/assets/images/sinh-to-dua-hau_thum-1021.png", category: "sinh-to"},
  {id: "11", name: "Sinh tố bơ", cost: 25000, description: "Bơ luôn được đánh giá là một loại trái cây chứa hàm lượng dinh dưỡng cao. Người ta thường dùng bơ để tăng hương vị và dưỡng chất cho các món ăn.", image: "/assets/images/sinh-to-bo_thum-1023.jpg", category: "sinh-to", promotion: 22000}  
]
let categories = [
  {id: "sinh-to", name: "Sinh tố"},
  {id: "mon-ran", name: "Món rán"}
]
export const getProduct = () => {
  return Promise.resolve(products)
}
export const getProductById = id => {
  let product = products.find(item => item.id === id)
  if(product)
  return Promise.resolve(product)
  else return Promise.reject("Not found!")
}
export const getCategory = () => {
  return Promise.resolve(categories)
}
export const getProductByCateogry = category => {
  return Promise.resolve(products.filter(item => item.category === category))
}