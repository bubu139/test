import type { MindMapNode } from '@/types/mindmap';

export const mindMapData: MindMapNode = {
  id: 'ung-dung-dao-ham',
  label: 'ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ',
  children: [
    {
      id: 'tinh-don-dieu',
      label: 'I. TÍNH ĐƠN ĐIỆU CỦA HÀM SỐ',
      children: [
        {
          id: 'dinh-nghia-don-dieu',
          label: 'A. Định nghĩa',
          children: [
            { id: 'dong-bien', label: 'Hàm số Đồng biến trên K: Nếu ∀x₁, x₂ ∈ K, x₁ < x₂ ⇒ f(x₁) < f(x₂). Đồ thị đi lên từ trái sang phải (Hình 1).', children: [] },
            { id: 'nghich-bien', label: 'Hàm số Nghịch biến trên K: Nếu ∀x₁, x₂ ∈ K, x₁ < x₂ ⇒ f(x₁) > f(x₂). Đồ thị đi xuống từ trái sang phải (Hình 2).', children: [] },
            { id: 'khai-niem-don-dieu', label: 'Đơn điệu: Hàm số đồng biến hoặc nghịch biến trên K. Khi xét tính đơn điệu mà không chỉ rõ tập K thì ta hiểu là xét trên tập xác định của hàm số đó.', children: [] },
          ],
        },
        {
          id: 'lien-he-dao-ham',
          label: 'B. Liên hệ giữa Đạo hàm và Tính Đơn điệu (Định lí 1, 2)',
          children: [
            { id: 'dieu-kien-dong-bien', label: "Đồng biến: Nếu f'(x) ≥ 0, ∀x ∈ K và f'(x) = 0 xảy ra tại một số hữu hạn điểm trên K thì hàm số đồng biến trên K.", children: [] },
            { id: 'dieu-kien-nghich-bien', label: "Nghịch biến: Nếu f'(x) ≤ 0, ∀x ∈ K và f'(x) = 0 xảy ra tại một số hữu hạn điểm trên K thì hàm số nghịch biến trên K.", children: [] },
          ],
        },
        {
          id: 'quy-trinh-xet-don-dieu',
          label: 'C. Quy trình xét Tính đơn điệu (Dạng 1)',
          children: [
            { id: 'b1-don-dieu', label: 'Bước 1: Tìm tập xác định D.', children: [] },
            { id: 'b2-don-dieu', label: "Bước 2: Tính f'(x). Tìm xᵢ mà f'(x) = 0 hoặc không tồn tại.", children: [] },
            { id: 'b3-don-dieu', label: 'Bước 3: Lập bảng biến thiên.', children: [] },
            { id: 'b4-don-dieu', label: 'Bước 4: Kết luận về các khoảng đồng biến, nghịch biến.', children: [] },
          ],
        },
      ],
    },
    {
      id: 'cuc-tri',
      label: 'II. CỰC TRỊ CỦA HÀM SỐ',
      children: [
        {
          id: 'dinh-nghia-cuc-tri',
          label: 'A. Định nghĩa và Tên gọi',
          children: [
            {
              id: 'cuc-dai',
              label: 'Cực đại tại x₀: Tồn tại h > 0 sao cho f(x) < f(x₀) với mọi x ∈ (x₀ - h; x₀ + h) ⊂ (a; b) và x ≠ x₀.',
              children: [
                { id: 'cuc-dai-note-1', label: 'Giá trị cực đại: f(x₀) (ký hiệu y꜀ᴰ).', children: [] },
                { id: 'cuc-dai-note-2', label: 'Điểm cực đại của đồ thị: M(x₀; f(x₀))', children: [] },
              ],
            },
            {
              id: 'cuc-tieu',
              label: 'Cực tiểu tại x₀: Tồn tại h > 0 sao cho f(x) > f(x₀) với mọi x ∈ (x₀ - h; x₀ + h) ⊂ (a; b) và x ≠ x₀.',
              children: [
                { id: 'cuc-tieu-note-1', label: 'Giá trị cực tiểu: f(x₀) (ký hiệu y꜀ᴛ).', children: [] },
                { id: 'cuc-tieu-note-2', label: 'Các điểm cực đại và cực tiểu được gọi chung là điểm cực trị.', children: [] },
              ],
            },
          ],
        },
        {
          id: 'dieu-kien-cuc-tri',
          label: 'B. Điều kiện Cần và Đủ',
          children: [
            { id: 'dk-can-cuc-tri', label: "Điều kiện cần: Nếu hàm số đạt cực trị tại x₀ và có đạo hàm thì f'(x₀) = 0 hoặc f'(x₀) không tồn tại.", children: [] },
            {
              id: 'dk-du-cuc-tri',
              label: "Điều kiện đủ: Đạo hàm f'(x) đổi dấu khi x qua x₀.",
              children: [
                { id: 'dk-du-cuc-dai', label: "Cực đại: f'(x) đổi dấu từ Dương (>0) sang Âm (<0).", children: [] },
                { id: 'dk-du-cuc-tieu', label: "Cực tiểu: f'(x) đổi dấu từ Âm (<0) sang Dương (>0).", children: [] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'max-min',
      label: 'III. GIÁ TRỊ LỚN NHẤT – NHỎ NHẤT (MAX – MIN)',
      children: [
        {
          id: 'dinh-nghia-max-min',
          label: 'A. Định nghĩa',
          children: [
            { id: 'gtln', label: 'Giá trị lớn nhất (M): max f(x) = M (x∈D) nếu f(x) ≤ M, ∀x ∈ D và ∃x₀ ∈ D: f(x₀) = M.', children: [] },
            { id: 'gtnn', label: 'Giá trị nhỏ nhất (m): min f(x) = m (x∈D) nếu f(x) ≥ m, ∀x ∈ D và ∃x₀ ∈ D: f(x₀) = m.', children: [] },
          ],
        },
        {
          id: 'phuong-phap-max-min',
          label: 'B. Phương pháp tìm MAX/MIN trên đoạn [a; b]',
          children: [
            { id: 'b1-max-min', label: "Bước 1: Giải phương trình f'(x) = 0 tìm x₀ ∈ (a; b).", children: [] },
            { id: 'b2-max-min', label: "Bước 2: Tính toán các giá trị: f(a), f(b), f(x₀), f(xᵢ) (nếu có xᵢ làm f'(x) không xác định).", children: [] },
            { id: 'b3-max-min', label: 'Bước 3: M là giá trị lớn nhất, m là giá trị nhỏ nhất trong các kết quả tính được.', children: [] },
            { id: 'luu-y-max-min', label: 'Lưu ý Đơn điệu: Nếu f(x) đồng biến trên [a; b] thì min f(x) = f(a) và max f(x) = f(b).', children: [] },
          ],
        },
      ],
    },
    {
      id: 'tiem-can',
      label: 'IV. ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ',
      children: [
        {
          id: 'tcn',
          label: 'A. Tiệm cận ngang (TCN)',
          children: [
            { id: 'dinh-nghia-tcn', label: 'Định nghĩa: Đường thẳng y = m là TCN nếu lim f(x) = m (x→-∞) hoặc lim f(x) = m (x→+∞).', children: [] },
            { id: 'tcn-bac1-bac1', label: 'Hàm số bậc 1/bậc 1 (y = (ax+b)/(cx+d)): TCN là y = a/c.', children: [] },
          ],
        },
        {
          id: 'tcd',
          label: 'B. Tiệm cận đứng (TCĐ)',
          children: [
            { id: 'dinh-nghia-tcd', label: 'Định nghĩa: Đường thẳng x = a là TCĐ nếu ít nhất một trong các giới hạn một bên tại a bằng ±∞.', children: [] },
            { id: 'tcd-bac1-bac1', label: 'Hàm số bậc 1/bậc 1 (y = (ax+b)/(cx+d)): TCĐ là x = -d/c.', children: [] },
          ],
        },
        {
          id: 'tcx',
          label: 'C. Tiệm cận xiên (TCX)',
          children: [
            { id: 'dinh-nghia-tcx', label: 'Định nghĩa: Đường thẳng y = ax + b (a ≠ 0) là TCX nếu lim [f(x) - (ax + b)] = 0 (x→±∞).', children: [] },
            { id: 'tim-tcx', label: 'Cách tìm a, b: a = lim f(x)/x (x→±∞) và b = lim [f(x) - ax] (x→±∞).', children: [] },
            { id: 'luu-y-tcx', label: "Lưu ý: Nếu a=0, TCX trở thành TCN. Đối với hàm phân thức Bậc 2/Bậc 1, có thể chia đa thức để tìm TCX y = a'x + b'.", children: [] },
          ],
        },
      ],
    },
    {
      id: 'khao-sat-ve-do-thi',
      label: 'V. KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ (Phân loại)',
      children: [
        {
          id: 'ham-bac-ba',
          label: 'A. Hàm số Bậc Ba (y = ax³ + bx² + cx + d)',
          children: [
            { id: 'tam-doi-xung-bac-ba', label: "Tâm đối xứng: Hoành độ là nghiệm của y'' = 0, tức là x = -b/(3a).", children: [] },
            { id: 'dk-cuc-tri-bac-ba', label: "Điều kiện Cực trị: Có hai cực trị khi a ≠ 0 và Δy' = b² - 3ac > 0.", children: [] },
          ],
        },
        {
          id: 'ham-bac1-bac1',
          label: 'B. Hàm số Bậc 1/Bậc 1 (y = (ax+b)/(cx+d))',
          children: [
            { id: 'tam-doi-xung-bac1-bac1', label: 'Tâm đối xứng: Giao điểm của TCĐ (x = -d/c) và TCN (y = a/c).', children: [] },
            { id: 'dac-diem-bac1-bac1', label: 'Đặc điểm: Luôn đơn điệu trên từng khoảng xác định.', children: [] },
          ],
        },
        {
          id: 'ham-bac2-bac1',
          label: 'C. Hàm số Bậc 2/Bậc 1 (y = (ax²+bx+c)/(mx+n))',
          children: [
            { id: 'dac-diem-bac2-bac1', label: 'Đặc điểm: Có TCĐ và TCX. Tâm đối xứng là giao điểm của TCĐ và TCX.', children: [] },
            { id: 'cuc-tri-bac2-bac1', label: "Cực trị: Có hai điểm cực trị khi phương trình y'=0 có hai nghiệm phân biệt.", children: [] },
          ],
        },
      ],
    },
    {
      id: 'tim-tham-so-m',
      label: 'VI. TÌM THAM SỐ m (Điều kiện Max/Min, Đơn điệu, Cực trị)',
      children: [
        {
          id: 'dk-don-dieu-m',
          label: 'A. Điều kiện Đơn điệu trên ℝ (Hàm bậc ba)',
          children: [
            { id: 'dk-dong-bien-m', label: "Đồng biến: a > 0 và Δy' ≤ 0.", children: [] },
            { id: 'dk-nghich-bien-m', label: "Nghịch biến: a < 0 và Δy' ≤ 0.", children: [] },
          ],
        },
        {
          id: 'dk-cuc-tri-m',
          label: 'B. Điều kiện Cực trị (Hàm bậc ba)',
          children: [
            { id: 'co-hai-cuc-tri-m', label: "Hàm số có hai điểm cực trị: a ≠ 0 và Δy' > 0.", children: [] },
            { id: 'khong-co-cuc-tri-m', label: "Hàm số không có cực trị: Δy' ≤ 0 hoặc suy biến {a = 0, b = 0}.", children: [] },
          ],
        },
      ],
    },
  ],
};