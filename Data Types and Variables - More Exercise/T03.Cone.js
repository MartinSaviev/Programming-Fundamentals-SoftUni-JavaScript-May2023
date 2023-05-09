function cone(radius, height) {

    let volume = (1 / 3) * radius * radius * height;
    let result = Math.PI * volume;

    let slantHeight = Math.sqrt((radius * radius) + (height * height));
    let baseSurfaceArea = Math.PI * radius * radius;
    let lateralSurfaceArea = Math.PI * radius * slantHeight;
    let totalResult = baseSurfaceArea + lateralSurfaceArea;

    console.log(`volume = ${result.toFixed(4)}`);
    console.log(`area = ${totalResult.toFixed(4)}`);

}