// if (q === 0) {
//   let lb = lowerBound(n, arr, x);
//   console.log(n - lb);
// } else {
//   let up = uperBound(n, arr, x);
//   console.log(n - up);

















// }
const arr = [2, 2, 2, 3, 5, 5, 5, 7, 9]

let lb = lowerBound(arr.length, arr, 5);
console.log('lb: ', lb);
let up = uperBound(arr.length, arr, 5);
console.log('up: ', up);
function lowerBound(n, arr, key) {
  let l = 0;
  let r = n;
  while (l < r) {
    let mid = Math.floor(r + (l - r) / 2);
    if (arr[mid] >= key) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  if (l < n) {
    return l;
  } else {
    return n;
  }
}
function uperBound(n, arr, key) {
  let l = 0;
  let r = n;
  while (l < r) {
    let mid = Math.floor(r + (l - r) / 2);
    if (arr[mid] > key) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  if (l < n) {
    return l;
  } else {
    return n;
  }
}
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/amareshcoding/node.git
// git push -u origin main