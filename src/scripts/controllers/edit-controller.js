// class EditController extends Controller {
//   startListening() {
//       const { graph, paper } = this.context;

//       // this.listenTo(graph, {
//       //     'change:source': replaceLink,
//       //     'change:target': replaceLink,
//       // });

//       this.listenTo(paper, {
//           'link:mouseenter': showLinkTools,
//           'link:mouseleave': hideLinkTools,
//           'element:mouseenter': showElementTools,
//           'element:mouseleave': hideElementTools,
//           // 'element:pointerdblclick': removeElement,
//           'blank:pointerdblclick': addElement,
//       });
//   }
// }

// function showLinkTools(_context, linkView, _evt) {
//   linkView.showTools();
// }

// function hideLinkTools(_context, linkView) {
//   linkView.hideTools();
// }

// function showElementTools(_context, elementView, _evt) {
//   elementView.showTools();
// }

// function hideElementTools(_context, elementView) {
//   elementView.hideTools();
// }

// function addElement({ createNode }, _evt, x, y) {
//   var node = createNode(getNodeId());
//   node.position(x - 40 / 2, y - 40 / 2);
// }