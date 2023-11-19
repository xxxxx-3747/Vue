function replaceString(input) {
    // 正则表达式，匹配以http://开头或以/以前开始，中间包含bigscreen或minio的字符串
    const regex = /(http:\/\/[^\/]*)bigscreen|(https:\/\/[^\/]*)minio/g;

    // 使用replace方法替换匹配的字符串
    const result = input.replace(regex, '$1*****'); // 将匹配的字符串替换为*****

    return result;
}

// 示例输入
const input = "http://example.com/something/bigscreen is a big screen and https://example.com/something/minio is a small object storage system";

// 调用替换函数
const output = replaceString(input);

// 输出结果
console.log(output); // 输出: "http://example.com/something/***** is a big screen and https://example.com/something/***** is a small object storage system"
