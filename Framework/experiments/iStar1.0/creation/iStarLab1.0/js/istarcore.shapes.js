/*! This is open-source. Feel free to use, modify, redistribute, and so on.
 */
joint.shapes.istar = {};

/*
* The Actor, Agent, Role, and Position shapes are structured as follows:
	.element: the circle that represents the actor when collapsed
	text: the text inside the circle, usually representing the name of the actor
	.boundary: the container for the elements that go inside the actor

	Additionally, Agent, Role and Position also contain a path that distinguishes then from the generic Actor element

	A rectangular boundary is used instead of the original circular boundary, to maximize the space available for drawing
*/

joint.shapes.istar.Actor = joint.dia.Element.extend({
    markup: '<g><rect class="boundary" /><circle class="element actorKindMain" /><path /><text/></g>',
    defaults: joint.util.deepSupplement({
        type: 'Actor',
        size: {width: 200, height: 120},
        attrs: {
            '.element': {
                cx: 40,
                cy: 40,
                fill: 'rgb(205,254,205)',
                r: 40,
                stroke: 'black',
                'stroke-width': 2,
                transform: 'translate(-20, -20)'  //displaces the circle a little bit
            },
            text: {
                fill: '#000000',
                'font-family': 'Arial, helvetica, sans-serif',
                'font-size': 12,
                ref: 'circle',//makes the position of the text relative to the circle
                'ref-x': 0.5,
                'ref-y': 0.5,
                text: 'Actor',
                'text-anchor': 'middle',
                'y-alignment': 'middle'
            },
            '.boundary': {
                fill: 'rgb(230,230,230)',
                height: 120,
                rx: 100,
                ry: 40,
                stroke: 'black',
                'stroke-dasharray': '10,5,4,4',
                'stroke-width': 2,
                width: 200
            },
        }

    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.istar.Role = joint.dia.Element.extend({
    markup: '<g><rect class="boundary" /><circle class="element actorKindMain" /><path class="actorDecorator"/><text/></g>',
    defaults: joint.util.deepSupplement({
        type: 'Role',
        size: {width: 200, height: 120},
        attrs: {
            '.element': {
                cx: 40,
                cy: 40,
                fill: 'rgb(205,254,205)',
                r: 40,
                stroke: 'black',
                'stroke-width': 2,
                transform: 'translate(-20, -20)'  //displaces the circle a little bit
            },
            text: {
                fill: '#000000',
                'font-family': 'Arial, helvetica, sans-serif',
                'font-size': 12,
                ref: 'circle',//makes the position of the text relative to the circle
                'ref-x': 0.5,
                'ref-y': 0.5,
                text: 'Role',
                'text-anchor': 'middle',
                'y-alignment': 'middle'
            },
            '.boundary': {
                fill: 'rgb(230,230,230)',
                height: 120,
                rx: 100,
                ry: 40,
                stroke: 'black',
                'stroke-dasharray': '10,5,4,4',
                'stroke-width': 2,
                width: 200
            },
            path: {
                d: 'm -11 45 q 30 15 62 0',
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1.5
            }
        }
    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.istar.Agent = joint.dia.Element.extend({
    markup: '<g><rect class="boundary"/><circle class="element actorKindMain"/><path class="actorDecorator"/><text/></g>',
    defaults: joint.util.deepSupplement({
        type: 'Agent',
        size: {width: 200, height: 120},
        attrs: {
            '.element': {
                cx: 40,
                cy: 40,
                fill: 'rgb(205,254,205)',
                r: 40,
                stroke: 'black',
                'stroke-width': 2,
                transform: 'translate(-20, -20)'  //displaces the circle a little bit

            },
            text: {
                fill: '#000000',
                'font-family': 'Arial, helvetica, sans-serif',
                'font-size': 12,
                ref: 'circle',//makes the position of the text relative to the circle
                'ref-x': 0.5,
                'ref-y': 0.5,
                text: 'Agent',
                'text-anchor': 'middle',
                'y-alignment': 'middle'
            },
            '.boundary': {
                fill: 'rgb(230,230,230)',
                height: 120,
                rx: 100,
                ry: 40,
                stroke: 'black',
                'stroke-dasharray': '10,5,4,4', //'10,5'
                'stroke-width': 2,
                width: 200
            },
            path: {
                d: 'm -10 -5 60 0',
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1.5
            }
        }
    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.istar.Position = joint.dia.Element.extend({
    markup: '<g><rect class="boundary"/><circle class="element actorKindMain"/><path class="actorDecorator"/><text/></g>',
    defaults: joint.util.deepSupplement({
        type: 'Position',
        size: {width: 200, height: 120},
        attrs: {
            /*'.element': {
                //cx: 40,
                //cy: 40,
                fill: 'rgb(205,254,205)',
                r: 40,
                stroke: 'black',
                'stroke-width': 2,
                transform: 'translate(-20, -20)'  //displaces the circle a little bit
            },*/
            text: {
                fill: '#000000',
                'font-family': 'Arial, helvetica, sans-serif',
                'font-size': 12,
                ref: 'path',//makes the position of the text relative to the path
                'ref-x': 0.5,
                'ref-y': 0.5,
                text: 'Position',
                'text-anchor': 'middle',
                'y-alignment': 'middle'
            },
            '.boundary': {
                fill: 'rgb(230,230,230)',
                height: 120,
                rx: 100,
                ry: 40,
                stroke: 'black',
                'stroke-dasharray': '10,5,4,4', //'10,5'
                'stroke-width': 2,
                width: 200
            },
            path: {
                d: 'm -46.954367, 493.37111 c -9.554106,0.42695 -16.251467,9.33526 -19.413419,18.03942 -10.115393,2.74079 -21.917572,11.69034 -19.750925,24.03895 1.9468,10.08171 11.651264,15.06946 19.67209,18.90234 3.421622,11.02582 15.548448,21.45161 26.750259,15.82729 6.516279,-3.06795 10.701037,-9.72073 13.442525,-16.3502 C -16.045573,550.03 -4.4020903,540.27859 -6.9996607,527.58212 -9.162248,517.9107 -19.027923,514.18956 -26.661629,510.50888 -30.13013,501.84944 -37.134918,492.91417 -46.954367,493.37111 Z',
                //d: 'm -46.954367,493.37111 c -9.554106,0.42695 -16.251467,9.33526 -19.413419,18.03942 -10.115393,2.74079 -21.917572,11.69034 -19.750925,24.03895 1.9468,10.08171 11.651264,15.06946 19.67209,18.90234 3.421622,11.02582 15.548448,21.45161 26.750259,15.82729 6.516279,-3.06795 10.701037,-9.72073 13.442525,-16.3502 C -16.045573,550.03 -4.4020903,540.27859 -6.9996607,527.58212 -9.162248,517.9107 -19.027923,514.18956 -26.661629,510.50888 -30.13013,501.84944 -37.134918,492.91417 -46.954367,493.37111 Z',
                fill: 'rgb(205,254,205)',
                stroke: 'black',
                'stroke-width': 2,
                transform: 'translate(70, -515)'
            }
        }
    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.istar.Goal = joint.shapes.basic.Rect.extend({
    defaults: joint.util.deepSupplement({
        type: 'Goal',
        size: {width: 90, height: 35},
        attrs: {
            rect: {
                fill: 'rgb(205,254,205)',
                height: 30,
                rx: 20,
                stroke: 'black',
                'stroke-width': 2,
                'vector-effect': 'non-scaling-stroke', /* prevents stroke distortion when the element is resized */
                width: 130
            },
            text: {
                'font-size': 12,
                'font-weight': 'bold',
                text: 'Goal'
            }
        }
    }, joint.shapes.basic.Rect.prototype.defaults)
});

joint.shapes.istar.Resource = joint.shapes.basic.Rect.extend({
    defaults: joint.util.deepSupplement({
        type: 'Resource',
        size: {width: 90, height: 35},
        attrs: {
            rect: {
                fill: 'rgb(205,254,205)',
                height: 30,
                rx: 0,
                stroke: 'black',
                'stroke-width': 2,
                'vector-effect': 'non-scaling-stroke', /* prevents stroke distortion when the element is resized */
                width: 130
            },
            text: {
                'font-size': 12,
                'font-weight': 'bold',
                text: 'Resource'
            }
        }
    }, joint.shapes.basic.Rect.prototype.defaults)
});

joint.shapes.istar.Task = joint.shapes.basic.Polygon.extend({
    defaults: joint.util.deepSupplement({
        type: 'Task',
        size: {width: 95, height: 36},
        attrs: {
            'polygon': {
                fill: 'rgb(205,254,205)',
                height: 36,
                points: '0,18 15,0 115,0 130,18 115,36 15,36',
                stroke: 'black',
                'stroke-width': 2,
                'vector-effect': 'non-scaling-stroke', /* prevents stroke distortion when the element is resized */
                width: 130
            },
            text: {
                text: 'Task',
                'font-size': 12,
                'font-weight': 'bold',
                'ref-dy': '-50%',
            }
        }
    }, joint.shapes.basic.Polygon.prototype.defaults)
});

joint.shapes.istar.Softgoal = joint.shapes.basic.Path.extend({
    defaults: joint.util.deepSupplement({
        type: 'Softgoal',
        size: {width: 90, height: 55},
        attrs: {
            'path': {
                d: 'm 60.637955,-4.0358 c 17.5174,2.2042 29.9953,-10.69554 41.892705,-4.7858 22.34142,10.8714 11.2203,43.7743 -2.25,47.7322 -8.276505,2.9084 -13.960205,5.1934 -46.142805,-2.1786 -6.7454,-2.2317 -28.2652,6.0799 -35.4643,4.7143 C 9.072156,39.4809 6.491756,33.7693 3.744956,28.482 c -6.3069,-15.1266 -2.5738,-28.0439 7.981099,-34.7856 10.5549,-6.74179 27.9316,-7.30796 48.9119,2.2678 z',
                // d: 'M ' + 0 + ' ' + 0 + ' a 26.1831 26.1831 0 0 1 25 -3 a 18.8816 18.8816 0 0 1 27 -5 a 15.2684 15.2684 0 0 1 17.4999 3.25 a 19.182 19.182 0 0 1 24 -5 a 11.2361 11.2361 0 0 1 14.5 6.5 a 7.5085 7.5085 0 0 1 7 9 a 6.51159 6.51159 0 0 1 2.5 9.99998 a 7.67717 7.67717 0 0 1 -9 9.5 a 18.0487 18.0487 0 0 1 -17.25 3.625 a 41.1115 41.1115 0 0 1 -50.25 4.25 a 20.8059 20.8059 0 0 1 -22.25 0.25 a 28.5345 28.5345 0 0 1 -19.75 -6 a 12.0307 12.0307 0 0 1 -2.75 -21.75 a 6.06009 6.06009 0 0 1 3.74945 -5.62563 Z', //cloud shape
                fill: 'rgb(205,254,205)',
                resetOffset: true,
                stroke: 'black',
                'stroke-width': 2,
                'vector-effect': 'non-scaling-stroke' /* prevents stroke distortion when the element is resized */
            },
            text: {
                'font-size': 12,
                'font-weight': 'bold',
                'ref-y': '-65%',
                text: 'Softgoal',
                'y-alignment': 'middle'
            },
        }
    }, joint.shapes.basic.Path.prototype.defaults)
});

joint.shapes.istar.Belief = joint.shapes.basic.Ellipse.extend({
    defaults: joint.util.deepSupplement({
        type: 'Belief',
        size: {width: 90, height: 35},
        attrs: {
            ellipse: {
                fill: 'rgb(205,254,205)',
                height: 40,
                rx: 39,
                stroke: 'black',
                'stroke-width': 2,
                'vector-effect': 'non-scaling-stroke', /* prevents stroke distortion when the element is resized */
                width: 130
            },
            text: {
                'font-size': 12,
                'font-weight': 'bold',
                text: 'Belief',
                'ref-y': '50%',
                'ref-x': '40%'
            }
        }
    }, joint.shapes.basic.Ellipse.prototype.defaults)
});

joint.shapes.istar.IsALink = joint.dia.Link.define('IsALink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 10,-6 l -10,6 10,6',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            },
            label: {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                text: 'is-a',
                x: -20,
                y: 4,
            },
            'label-background': {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                stroke: 'white',
                'stroke-width': '0.35em',
                text: 'is-a',
                x: -20,
                y: 4,
            }
        },
        source: {selector: 'circle'},
        target: {selector: 'circle'}
    },
    {
        markup: [
            {
                tagName: 'path',
                selector: 'connection-wrap'
            },
            {
                tagName: 'path',
                selector: 'line'
            },
            {
                tagName: 'text',
                selector: 'label-background'
            },
            {
                tagName: 'text',
                selector: 'label'
            }
        ]
    }
);

joint.shapes.istar.IsPartOfLink = joint.dia.Link.define('IsPartOfLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 10,-6 l -10,6 10,6',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            },
            label: {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                text: 'is-part-of',
                x: -20,
                y: 4,
            },
            'label-background': {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                stroke: 'white',
                'stroke-width': '0.35em',
                text: 'is-part-of',
                x: -20,
                y: 4,
            }
        },
        source: {selector: 'circle'},
        target: {selector: 'circle'}
    },
    {
        markup: [
            {
                tagName: 'path',
                selector: 'connection-wrap'
            },
            {
                tagName: 'path',
                selector: 'line'
            },
            {
                tagName: 'text',
                selector: 'label-background'
            },
            {
                tagName: 'text',
                selector: 'label'
            }
        ]
    }
);

joint.shapes.istar.OccupiesLink = joint.dia.Link.define('OccupiesLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 10,-6 l -10,6 10,6',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            },
            label: {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                text: 'occupies',
                x: -20,
                y: 4,
            },
            'label-background': {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                stroke: 'white',
                'stroke-width': '0.35em',
                text: 'occupies',
                x: -20,
                y: 4,
            }
        },
        source: {selector: 'circle'},
        target: {selector: 'circle'}
    },
    {
        markup: [
            {
                tagName: 'path',
                selector: 'connection-wrap'
            },
            {
                tagName: 'path',
                selector: 'line'
            },
            {
                tagName: 'text',
                selector: 'label-background'
            },
            {
                tagName: 'text',
                selector: 'label'
            }
        ]
    }
);

joint.shapes.istar.CoversLink = joint.dia.Link.define('CoversLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 10,-6 l -10,6 10,6',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            },
            label: {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                text: 'covers',
                x: -20,
                y: 4,
            },
            'label-background': {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                stroke: 'white',
                'stroke-width': '0.35em',
                text: 'covers',
                x: -20,
                y: 4,
            }
        },
        source: {selector: 'circle'},
        target: {selector: 'circle'}
    },
    {
        markup: [
            {
                tagName: 'path',
                selector: 'connection-wrap'
            },
            {
                tagName: 'path',
                selector: 'line'
            },
            {
                tagName: 'text',
                selector: 'label-background'
            },
            {
                tagName: 'text',
                selector: 'label'
            }
        ]
    }
);

joint.shapes.istar.PlaysLink = joint.dia.Link.define('PlaysLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 10,-6 l -10,6 10,6',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            },
            label: {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                text: 'plays',
                x: -20,
                y: 4,
            },
            'label-background': {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                stroke: 'white',
                'stroke-width': '0.35em',
                text: 'plays',
                x: -20,
                y: 4,
            }
        },
        source: {selector: 'circle'},
        target: {selector: 'circle'}
    },
    {
        markup: [
            {
                tagName: 'path',
                selector: 'connection-wrap'
            },
            {
                tagName: 'path',
                selector: 'line'
            },
            {
                tagName: 'text',
                selector: 'label-background'
            },
            {
                tagName: 'text',
                selector: 'label'
            }
        ]
    }
);

joint.shapes.istar.INSLink = joint.dia.Link.define('INSLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 10,-6 l -10,6 10,6',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            },
            label: {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                text: 'ins',
                x: -20,
                y: 4,
            },
            'label-background': {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                stroke: 'white',
                'stroke-width': '0.35em',
                text: 'ins',
                x: -20,
                y: 4,
            }
        },
        source: {selector: 'circle'},
        target: {selector: 'circle'}
    },
    {
        markup: [
            {
                tagName: 'path',
                selector: 'connection-wrap'
            },
            {
                tagName: 'path',
                selector: 'line'
            },
            {
                tagName: 'text',
                selector: 'label-background'
            },
            {
                tagName: 'text',
                selector: 'label'
            }
        ]
    }
);

joint.shapes.istar.DependencyLink = joint.dia.Link.define('DependencyLink',
{
    attrs: {
        line: {
            connection: true,
            fill: 'none',
            stroke: 'black',
            'stroke-width': 1
        },
        'connection-wrap': {
            connection: true,
            fill: 'none',
            stroke: 'transparent',
            'stroke-linecap': 'round',
            'stroke-width': 20
        },
        label: {
            atConnectionRatio: 0.5,
            d: 'm 0,-10 l 0,20 4,0 c 10,0, 10 -20, 0,-20 l -4,0',
            // d: 'm 0,-10 l 0,20 c 15,2, 15 -22, 0,-20',
            // d: 'm 0,-10 l 0,20 q 15 -10, 0,-20',
            fill: 'white',
            // fill: 'none',
            stroke: 'black',
            'stroke-width': 2,
        }
    },
    source: {selector: 'text'},
    target: {selector: 'text'}
},
{
    markup: [
        {
            tagName: 'path',
            selector: 'connection-wrap'
        },
        {
            tagName: 'path',
            selector: 'line'
        },
        {
            tagName: 'path',
            selector: 'label'
        }]
}
);

joint.shapes.istar.DecompositionLink = joint.dia.Link.define('DecompositionLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                'targetMarker': {
                    'd': 'm 10,-6 l 0,12',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            }
        }
    },
    {
        markup: [
            {
                tagName: 'path',
                selector: 'connection-wrap'
            },
            {
                tagName: 'path',
                selector: 'line'
            }
        ]
    }
);

joint.shapes.istar.MeansEndsLink = joint.dia.Link.define('MeansEndsLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 12,-6 l -12,6 12,6 z',
                     fill: 'black',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            }
        }
    },
    {
        markup: [
            {
                tagName: 'path',
                selector: 'connection-wrap'
            },
            {
                tagName: 'path',
                selector: 'line'
            }
        ]
    }
);

joint.shapes.istar.ContributionLink = joint.dia.Link.define('ContributionLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 10,-6 l -10,6 10,6',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            }
        },
        labels: [
            {
                position: 0.4,
                attrs: {
                    text: {
                        'font-family': 'sans-serif',
                        'font-size': 12,
                        'font-weight': 'bold'
                    },
                    rect: {
                        fill: 'rgb(230,230,230)',
                    }
                }
            }
        ],
        source: {selector: 'circle'},
        target: {selector: 'circle'}
    },
    {
        markup: [
            {
                tagName: 'path',
                selector: 'connection-wrap'
            },
            {
                tagName: 'path',
                selector: 'line'
            }
        ]
    }
);