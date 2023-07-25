let coupons = [];
let couponsPerBox = 1000;
let lastCouponNumber = 1;
let prizeCoupons = [];
let countNon = 0;
let countGift = 0;
let prizes = [
  { label: "Rp. 100.000", total: 5 },
  { label: "Rp. 50.000", total: 10 },
  { label: "Rp. 20.000", total: 25 },
  { label: "Rp. 10.000", total: 50 },
  { label: "Rp. 5.000", total: 100 },
];

// Membuat list dari 190 kupon
for (let i = 0; i < prizes.length; i++) {
  prizeCoupons.push(Array(prizes[i].total).fill(prizes[i].label));
}
prizeCoupons = prizeCoupons.flat(1);

// Membuat kode kupon
for (let j = 1; j <= 10; j++) {
  let coupons1000 = [];
  for (let i = 1; i <= couponsPerBox; i++) {
    let couponNumber = `${String(lastCouponNumber).padStart(5, 0)}`;
    coupons1000.push({ couponNumber: couponNumber, box: j });
    lastCouponNumber++;
  }
  coupons.push(coupons1000);
}

// Mengacak kode kupon berhadiah pada 10 box
for (let j = 0; j < 10; j++) {
  shuffle(coupons[j]);

  // Assign kupon berhadiah sejumlah kuota hadiah
  for (let h = 0; h < prizeCoupons.length; h++) {
    coupons[j][h * 2]["label"] = `Hadiah ${prizeCoupons[h]}`;
  }

  // Assign kupon tidak berhadiah
  for (let i = 0; i < coupons[j].length; i++) {
    if (coupons[j][i]["label"] === undefined) {
      coupons[j][i]["label"] = "Anda Belum Beruntung";
    }

    // if (coupons[j][i]["label"] != "Anda Belum Beruntung") {
    //   countNon++;
    // }
    // if (coupons[j][i]["label"] == "Anda Belum Beruntung") {
    //   countGift++;
    // }
  }
}
// console.log(countNon);

const sortArrayOfObjects = (arr, propertyName, order = "ascending") => {
  const sortedArr = arr.sort((a, b) => {
    if (Number(a[propertyName]) < Number(b[propertyName])) {
      return -1;
    }
    if (Number(a[propertyName]) > Number(b[propertyName])) {
      return 1;
    }
    return 0;
  });

  if (order === "descending") {
    return sortedArr.reverse();
  }

  return sortedArr;
};

// Mengacak kode kupon
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

let sortedCoupons = sortArrayOfObjects(coupons.flat(), "couponNumber");

console.log(sortedCoupons);
console.log(coupons);

let couponCount = 10000;
let countDouble;
let isDouble = true;

// Cek jika ada kupon berhadiah yang urut
checkConsecutiveCoupon();
checkConsecutiveCoupon();
checkConsecutiveCoupon();
checkConsecutiveCoupon();
checkConsecutiveCoupon();

function checkConsecutiveCoupon() {
  for (let i = 0; i < couponCount - 1; i++) {
    countDouble = 0;
    if (
      sortedCoupons[i]["label"] == sortedCoupons[i + 1]["label"] &&
      sortedCoupons[i]["label"] != "Anda Belum Beruntung"
      // sortedCoupons[sortedCoupons.length - 1 - i]["label"] ==
    ) {
      // Tambah count jika terdapat kode kupon yg urut
      countDouble++;
      // console.log("==================================");
      console.log(sortedCoupons[i]);
      // console.log("--------------------------");

      // if (
      //   // sortedCoupons[sortedCoupons.length - 1 - i]["label"] ==
      //   sortedCoupons[i + 3]["label"] == "Anda Belum Beruntung"
      // ) {
      //   // sortedCoupons[sortedCoupons.length - 1 - i]["label"] =
      //   sortedCoupons[i + 3]["label"] = sortedCoupons[i]["label"];
      //   sortedCoupons[i]["label"] = "Anda Belum Beruntung";
      //   // console.log(sortedCoupons[i + 2]);
      // }
      if (
        // sortedCoupons[sortedCoupons.length - 1 - i]["label"] ==
        sortedCoupons[i + 2]["label"] == "Anda Belum Beruntung"
      ) {
        // sortedCoupons[sortedCoupons.length - 1 - i]["label"] =
        sortedCoupons[i + 2]["label"] = sortedCoupons[i]["label"];
        sortedCoupons[i + 1]["label"] = "Anda Belum Beruntung";
        // console.log(sortedCoupons[i + 2]);
      }
      if (
        // sortedCoupons[sortedCoupons.length - 1 - i]["label"] ==
        sortedCoupons[i - 1]["label"] == "Anda Belum Beruntung"
      ) {
        // sortedCoupons[sortedCoupons.length - 1 - i]["label"] =
        sortedCoupons[i - 1]["label"] = sortedCoupons[i]["label"];
        sortedCoupons[i]["label"] = "Anda Belum Beruntung";
        // console.log(sortedCoupons[i + 2]);
      }
      if (
        // sortedCoupons[sortedCoupons.length - 1 - i]["label"] ==
        sortedCoupons[i - 2]["label"] == "Anda Belum Beruntung"
      ) {
        // sortedCoupons[sortedCoupons.length - 1 - i]["label"] =
        sortedCoupons[i - 2]["label"] = sortedCoupons[i]["label"];
        sortedCoupons[i]["label"] = "Anda Belum Beruntung";
        // console.log(sortedCoupons[i + 2]);
      }
      // if (
      //   // sortedCoupons[sortedCoupons.length - 1 - i]["label"] ==
      //   sortedCoupons[i - 1]["label"] == "Anda Belum Beruntung"
      // ) {
      //   // sortedCoupons[sortedCoupons.length - 1 - i]["label"] =
      //   sortedCoupons[i - 1]["label"] = sortedCoupons[i]["label"];
      //   sortedCoupons[i]["label"] = "Anda Belum Beruntung";
      //   // console.log(sortedCoupons[i + 2]);
      // }

      // if (
      //   sortedCoupons[sortedCoupons.length - 1 - i]["label"] ==
      //   // sortedCoupons[i + 2]["label"] ==
      //   "Anda Belum Beruntung"
      // ) {
      //   sortedCoupons[sortedCoupons.length - 1 - i]["label"] =
      //     // sortedCoupons[i + 2]["label"] = sortedCoupons[i]["label"];
      //     sortedCoupons[i + 1]["label"] = "Anda Belum Beruntung";
      //   // console.log(sortedCoupons[i + 2]);
      // }

      // Reassign dan tukar kode kupon berhadiah ke kode kupon lain yang masih kosong
      // console.log("==================================");
    }
  }
  console.log(countDouble);
  if (countDouble == 0) {
    isDouble = false;
  }
  // countDouble = 0;
}

console.log(sortedCoupons);

// Mengelompokkan per box 1-10
let sortedBoxCoupons = [];
for (let i = 0; i < sortedCoupons.length; i += 1000) {
  const coupons1000 = sortedCoupons.slice(i, i + 1000);
  sortedBoxCoupons.push(coupons1000);
}
console.log(sortedBoxCoupons);

// Menampilkan ke website
for (let i = 0; i < sortedBoxCoupons.length; i++) {
  for (let j = 0; j < sortedBoxCoupons[i].length; j++) {
    if (sortedBoxCoupons[i][j]["label"] != "Anda Belum Beruntung") {
      countGift++;
    }
    if (sortedBoxCoupons[i][j]["label"] == "Anda Belum Beruntung") {
      countNon++;
    }
    let element = `
  <div class="col-1 mb-2">
  <div class="card">
    <div class="card-body p-2">
      <p class="mb-2">${sortedBoxCoupons[i][j]["couponNumber"]}</p>
      <p class="mb-0">${sortedBoxCoupons[i][j]["label"]}</p>
    </div>
  </div>
</div>
`;
    document
      .querySelector(`.row-box-${sortedBoxCoupons[i][j]["box"]}`)
      .insertAdjacentHTML("beforeend", element);
  }
}
console.log(countNon, countGift);
