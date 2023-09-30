// @ts-nocheck
var namespace = joint.shapes;

var graph = new joint.dia.Graph({}, { cellNamespace: namespace });

var paper = new joint.dia.Paper({
    el: document.getElementById('interactive-graph'),
    model: graph,
    width: 600,
    height: 100,
    gridSize: 1,
    cellViewNamespace: namespace
});

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
