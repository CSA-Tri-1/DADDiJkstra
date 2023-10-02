// @ts-nocheck

var namespace = joint.shapes;

var graph = new joint.dia.Graph({}, { cellNamespace: namespace });

var paper = new joint.dia.Paper({
    el: document.getElementById('interactive-graph'),
    model: graph,
    width: 500,
    height: 500,
    gridSize: 1,
    cellViewNamespace: namespace
});

var current_index = 1;

var node = new joint.shapes.standard.Circle();
node.position(100, 30);
node.resize(100, 40);
node.attr({
    body: {
        fill: 'black'
    },
    label: {
        fill: 'white'
    }
});
node.attr('label/text', '1');
node.addTo(graph)
var node2 = node.clone();
node2.translate(300, 0);
node2.attr('label/text', '2');
node2.addTo(graph)
var link = new joint.shapes.standard.Link();
link.source(node);
link.target(node2);
link.addTo(graph);

// const size = 40;

// creating nodes on map

const viewController = new ViewController({ paper});
const editController = new EditController({ graph, paper, createLink, createNode});

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
 