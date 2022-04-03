import { Box, List, li, Typography } from "@material-ui/core";

function InformationMore() {
    return (
        <Box style={{fontSize:"16px", marginTop:"10px", paddingRight: "10px", marginBottom: "10px"}} className={`main-text-color-black `}>
            <ul >
                <li>
                    Bao gồm: 15 ảnh đã chỉnh sửa cho buổi chụp ảnh kéo dài một giờ và 20 ảnh đã chỉnh sửa cho buổi chụp ảnh kéo dài hai
                </li>
                <li>Sau khi xác nhận đặt chỗ, nhiếp ảnh gia chuyên nghiệp của bạn sẽ được chỉ định cho bạn trong vòng 24 giờ. Bạn sẽ được thông báo về chi tiết liên hệ của họ qua email.</li>
                <li>Trao đổi trực tiếp với nhiếp ảnh gia để thống nhất địa điểm và thời gian. Để tối đa hóa thời gian của bạn với nhiếp ảnh gia, chúng tôi thực sự khuyên bạn nên gặp trực tiếp nhiếp ảnh gia tại địa điểm chụp ảnh mong muốn của bạn. Bạn có thể chụp ảnh ở nhiều địa điểm nhưng không nên vì bạn sẽ mất thời gian cùng nhiếp ảnh gia di chuyển từ địa điểm này sang địa điểm khác.</li>
                <li>Trong vòng 24 giờ sau khi chụp ảnh, bạn sẽ nhận được thông báo qua email khi nhiếp ảnh gia đã tải tất cả ảnh lên nền tảng trực tuyến. Bạn sẽ có thể xem tất cả ảnh của mình và danh sách chọn lọc những ảnh bạn muốn chỉnh sửa, đồng thời nhận được thông báo qua email sau khi quá trình chỉnh sửa hoàn tất và ảnh có độ phân giải cao đã sẵn sàng để tải xuống.</li>
            </ul>
        </Box>
    );
}

export default InformationMore