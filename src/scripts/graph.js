let startView;
let endView;
let directed = false;
let pathMembersViews = [];
const pathMemberHighlightId = 'path-member';
const invalidPathHighlightId = 'invalid-path-member';
const pathMemberClassName = 'path-member';
const invalidPathClassName = 'invalid-path';
const highlightId = 'start-highlight';
const blueColor = '#4666E5';
const blackColor = '#222222';
const invalidColor = '#FF4365';
const outlineColor = '#616161';
const startAttrs = {
    padding: 2,
    attrs: {
        stroke: blueColor,
        'stroke-width': 2
    }
};
let nextId = 0;
let editMode = true; // temp true
const size = 40;
const editModePopup = document.getElementById('popup');
const getTargetMarkerStyle = () => ({ type: 'path', d: directed ? 'M 6 -3 0 0 6 3 z' : null, fill: blackColor, stroke: blackColor });
const getLinkStyle = () => {
    return directed ?
        V.createSVGStyle(`
            .joint-link .${pathMemberClassName} {
                stroke: ${blueColor};
                stroke-dasharray: 5;
                stroke-dashoffset: 100;
                animation: dash 1.25s infinite linear;
            }
        `) : V.createSVGStyle(`
            .joint-link .${pathMemberClassName} {
                animation: stroke 0.6s ease-in-out infinite alternate;
            }
        `);
}
const getStartView = () => startView;
const getEndView = () => endView;

const graph = new joint.dia.Graph;
const paperElement = document.getElementById('interactive-graph');
const paper = new joint.dia.Paper({
    el: document.getElementById('interactive-graph'),
    width: 800,
    height: 400,
    gridSize: 1,
    model: graph,
    sorting: joint.dia.Paper.sorting.APPROX,
});

var namespace = joint.shapes;

// var graph = new joint.dia.Graph({}, { cellNamespace: namespace });

// var paper = new joint.dia.Paper({
//     el: document.getElementById('interactive-graph'),
//     model: graph,
//     width: 500,
//     height: 500,
//     gridSize: 1,
//     cellViewNamespace: namespace
// });

var current_index = 0;

// var node = new joint.shapes.standard.Circle();
// node.position(100, 30);
// node.resize(100, 40);
// node.attr({
//     body: {
//         fill: 'black'
//     },
//     label: {
//         fill: 'white'
//     }
// });
// node.attr('label/text', '1');
// node.addTo(graph)
// var node2 = node.clone();
// node2.translate(300, 0);
// node2.attr('label/text', '2');
// node2.addTo(graph)
// var link = new joint.shapes.standard.Link();
// link.source(node);
// link.target(node2);
// link.addTo(graph);



const viewController = new ViewController({ paper });
const editController = new EditController({ graph, paper, createLink, createNode, setStartView, setEndView, getStartView, size });

editController.startListening();

function getNodeId() {
    current_index++;
    return current_index;
}

function createNode(id) {
    var node = new joint.shapes.standard.Circle({
        id,
        size: { width: 40, height: 40 },
        attrs: {
            body: {
                fill: 'black'
            },
            label: {
                fill: 'white'
            }
        }
    }).addTo(graph);
    var view = node.findView(paper);
    view.addTools(new joint.dia.ToolsView({
        tools: [
            new joint.elementTools.HoverConnect({
                useModelGeometery: true,
                trackPath: V.convertCircleToPathData(joint.V(`<circle cx="${ 40 / 2 }" cy="${ 40 / 2 }" r="${ 40 / 2 }" />`))
            }),
        ]
    }))
    
    view.hideTools();
    node.attr('label/text', id);
    return node;
}

// creating links between nodes on map
function createLink(s, t) {
    var link = new joint.shapes.standard.Link({
        id: [s, t].sort().join(),
        source: { id: s },
        target: { id: t },
        z: 1,
        attrs: {
            wrapper: {
                stroke: 'white',
                'stroke-width': 6
            },
            line: { targetMarker: getTargetMarkerStyle(), stroke: outlineColor }
        }
    });
    link.addTo(graph);
    
    var view = link.findView(paper);
    view.addTools(new joint.dia.ToolsView({
        tools: [
            new joint.linkTools.Vertices(),
            new joint.linkTools.Remove({ distance: '10%' })
        ]
    }));

    view.hideTools();
}

function setStartView(elementView) {
    hidePath();
    if (startView) {
        joint.highlighters.mask.remove(startView, highlightId);
        joint.highlighters.addClass.remove(startView, invalidPathHighlightId);
    }

    if (endView) {
        joint.highlighters.addClass.remove(endView, invalidPathHighlightId);
    }

    if (elementView) {
        joint.highlighters.mask.add(elementView, 'body', highlightId, startAttrs);
    }
    startView = elementView;
}

function setEndView(elementView) {
    endView = elementView;
}

paper.render();