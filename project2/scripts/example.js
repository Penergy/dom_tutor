function init(){
    // renderer
    // var renderer = new THREE.WebGLRenderer({
    //     canvas: document.getElementById("mainCanvas")
    // })
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(400,300);
    document.getElementsByTagName('body')[0].appendChild(renderer.domElement);
    renderer.setClearColor(0x000000);
    // scene
    var scene = new THREE.Scene();
    // 画一个长方形
    // var camera = new THREE.PerspectiveCamera(45, 4/3, 1, 1000);
    // camera.position.set(0,0,5);
    // scene.add(camera);
    // Triangle
    // var cube = new THREE.Mesh(new THREE.CubeGeometry(1,2,3),
    //     new THREE.MeshBasicMaterial({
    //         color: 0xff0000
    //     })
    // );
    // scene.add(cube);

    /**
     * 正交照相机
     */
    var camera = new THREE.OrthographicCamera(-2,2,1.5,-1.5,1,10);
    camera.position.set(4,-3,5);
    camera.lookAt(new THREE.Vector3(0,0,0));
    scene.add(camera);
    var cube = new THREE.Mesh(new THREE.CubeGeometry(1,1,1),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true
        })
    );
    scene.add(cube);
    // rendering
    renderer.render(scene, camera);
}