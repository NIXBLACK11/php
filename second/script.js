const callFunc = async () => {
    let vals = document.getElementById("nums").value;
    vals = vals.split(" ");
    let nums = [];
    vals.map((val)=> {
        nums.push(parseInt(val));
    });
    n = nums.length;
    await mergeSort(nums, 0, n-1, 0);
};

const renderArray = (nums, l, m, r, level) => {
    let left = "", right = "";
    for(let i=l;i<=m;i++) {
        left+=nums[i] + ",";
    }
    for(let i=m+1;i<=r;i++) {
        right+=nums[i] + ",";
    }
    console.log(left);

    let node = document.getElementById(level);
    if (!node) {
        node = document.createElement("div");
        node.setAttribute("id", `${level}`);
        document.getElementById("change").appendChild(node);
    }

    // const levelText = document.createTextNode(`Level ${level}: `);
    const textnode1 = document.createTextNode(left);
    const text = document.createTextNode("-----------");
    const textnode2 = document.createTextNode(right);
    // node.appendChild(levelText);
    node.appendChild(textnode1);
    node.appendChild(text);
    node.appendChild(textnode2);
};

const mergeSort = async (nums, l, r, level) => {
    if (l < r) {
        let m = Math.floor((l + r) / 2);
        await new Promise((resolve) => {
            setTimeout(() => {
                renderArray(nums, l, m, r, -(level+1));
                resolve();
            }, 1000); // Change this value to adjust the delay
        });
        await mergeSort(nums, l, m, level + 1);
        await mergeSort(nums, m + 1, r, level + 1);
        merge(nums, l, m, r);
        await new Promise((resolve) => {
            setTimeout(() => {
                renderArray(nums, l, m, r, (level+1));
                resolve();
            }, 1000); // Change this value to adjust the delay
        });
    }
};

const merge = (nums, l, m, r) => {
    let left = [];
    let right = [];
    for (let i = l; i <= m; i++) {
        left.push(nums[i]);
    }
    for (let i = m + 1; i <= r; i++) {
        right.push(nums[i])
    }
    let i = 0, j = 0, k = l;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            nums[k] = left[i];
            i += 1;
        } else {
            nums[k] = right[j];
            j += 1;
        }
        k += 1;
    }
    while (i < left.length) {
        nums[k] = left[i];
        i += 1;
        k += 1;
    }
    while (j < right.length) {
        nums[k] = right[j];
        j += 1;
        k += 1;
    }
};
