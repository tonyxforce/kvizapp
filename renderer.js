



        (function () {


            function onChange(event) {
                var reader = new FileReader();
                reader.onload = onReaderLoad;
                reader.readAsText(event.target.files[0]);
            }

            function onReaderLoad(event) {
                var obj = JSON.parse(event.target.result);
                console.log(obj);
                var title = Object.keys(obj)[0];
                process_data(title, obj);
            }

            function process_data(title, obj) {
                var arr = obj[title]


                var titleE = document.createElement("title")
                titleE.innerText = title;
                document.head.appendChild(titleE)

                var initEls = document.getElementsByClassName("initElement");

                [].forEach.call(initEls, (e) => {
                    e.style.display = "none"
                })

                document.obj = obj

                document.body.style.backgroundColor = obj.b
                document.body.style.color = obj.f;

                

                document.arr = arr

                document.questionCounter = 0;
                document.currentQuestion = document.arr[document.questionCounter]
                renderQ(document.currentQuestion.k, document.currentQuestion.r, document.currentQuestion.j, document.arr, obj.j, obj.r, obj.k, obj)
            }

            document.getElementById('jsonIn').addEventListener('change', onChange);

            function renderQ(k, r, j, arr, jV, rV, kV, obj) {

                var cG = () => {
                    alert(jV)

                    if (!(++document.questionCounter < document.arr.length)) {

                        alert(kV)

                        //require("electron").ipcRenderer.send("close");
                        eval(obj.a)

                        return;
                    }

                    document.currentQuestion = document.arr[document.questionCounter]
                    Qdiv.innerHTML = ""
                    renderQ(document.currentQuestion.k, document.currentQuestion.r, document.currentQuestion.j, document.arr, jV, rV, kV, obj)
                }

                var cB = () => {
                    alert(rV)
                }

                var Qdiv = document.getElementById("questionDiv");

                var KerdesH = document.createElement("h2");
                KerdesH.innerText = k;

                var random = Math.floor(1 + Math.random() * 3);


                var joBtn = document.createElement("button");
                joBtn.onclick = cG
                joBtn.innerText = j;

                r.forEach((e, i)=>{
                    r[i] = e.toLowerCase();
                    r[i] = e.charAt(0).toUpperCase() + e.slice(1);
                })

                j = j.toLowerCase()
                j = j.charAt(0).toUpperCase() + j.slice(1);

                var
                    rosszBtn1 = document.createElement("button"),
                    rosszBtn2 = document.createElement("button"),
                    rosszBtn3 = document.createElement("button");

                rosszBtn1.innerText = r[0]
                rosszBtn1.onclick = cB;

                rosszBtn2.innerText = r[1]
                rosszBtn2.onclick = cB;

                rosszBtn3.innerText = r[2]
                rosszBtn3.onclick = cB;

                Qdiv.appendChild(KerdesH)
                console.log(random)
                switch (random) {
                    case 1:
                        Qdiv.appendChild(joBtn)
                        Qdiv.appendChild(document.createElement("br"))
                        Qdiv.appendChild(rosszBtn1)
                        Qdiv.appendChild(document.createElement("br"))
                        Qdiv.appendChild(rosszBtn2)
                        Qdiv.appendChild(document.createElement("br"))
                        Qdiv.appendChild(rosszBtn3)
                        Qdiv.appendChild(document.createElement("br"))
                        break;
                    case 2:
                        Qdiv.appendChild(rosszBtn1)
                        Qdiv.appendChild(document.createElement("br"))
                        Qdiv.appendChild(joBtn)
                        Qdiv.appendChild(document.createElement("br"))
                        Qdiv.appendChild(rosszBtn2)
                        Qdiv.appendChild(document.createElement("br"))
                        Qdiv.appendChild(rosszBtn3)
                        Qdiv.appendChild(document.createElement("br"))
                        break;
                    case 3:
                        Qdiv.appendChild(rosszBtn1)
                        Qdiv.appendChild(document.createElement("br"))
                        Qdiv.appendChild(rosszBtn2)
                        Qdiv.appendChild(document.createElement("br"))
                        Qdiv.appendChild(joBtn)
                        Qdiv.appendChild(document.createElement("br"))
                        Qdiv.appendChild(rosszBtn3)
                        Qdiv.appendChild(document.createElement("br"))
                        break;
                    case 4:
                        Qdiv.appendChild(rosszBtn1)
                        Qdiv.appendChild(document.createElement("br"))
                        Qdiv.appendChild(rosszBtn2)
                        Qdiv.appendChild(document.createElement("br"))
                        Qdiv.appendChild(rosszBtn3)
                        Qdiv.appendChild(document.createElement("br"))
                        Qdiv.appendChild(joBtn)
                        Qdiv.appendChild(document.createElement("br"))
                        break;
                }

                console.log("asd")

                var nodes = document.getElementById("questionDiv").querySelectorAll("*")
            
                console.log(nodes)
            
                for (var i = 0; i < nodes.length; i++) {
                    var e = nodes[i]
                    console.log(e)
                    e.style.fontSize = obj.fs + "px"
                }
            }

            
        }());

