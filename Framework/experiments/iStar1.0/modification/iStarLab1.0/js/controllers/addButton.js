window.uiC = window.uiC || {};  //prevents overriding the variable, while also preventing working with a null variable

uiC.createAddButtons = function() {
    //create the ADD buttons
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-actor-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Actor',
            action: ui.STATE_ADD_ACTOR,
            tooltip: 'Add Actor',
            statusText: 'Adding <b>Actor</b>: click on an empty space in the diagram to add a new Actor'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-actor-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Agent',
            action: ui.STATE_ADD_ACTOR,
            tooltip: 'Add Agent',
            statusText: 'Adding <b>Agent</b>: click on an empty space in the diagram to add a new Agent'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-actor-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Role',
            action: ui.STATE_ADD_ACTOR,
            tooltip: 'Add Role',
            statusText: 'Adding <b>Role</b>: click on an empty space in the diagram to add a new Role'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-actor-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Position',
            action: ui.STATE_ADD_ACTOR,
            tooltip: 'Add Position',
            statusText: 'Adding <b>Position</b>: click on an empty space in the diagram to add a new Position'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-actor-link-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Is a',
            action: ui.STATE_ADD_LINK,
            name: 'IsALink',
            tooltip: 'Add an is-a link between an Actor and another Actor, an Agent and another Agent, a Role and another Role or a Position and another Position',
            statusText: 'Adding <b>is-a</b> link: click on the sub-actor/sub-role and then on the super-actor/super-role.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-actor-link-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Is part of',
            action: ui.STATE_ADD_LINK,
            name: 'IsPartOfLink',
            tooltip: 'Add a is part of link between an Actor and another Actor, an Agent and another Agent, a Role and another Role or a Position and another Position',
            statusText: 'Adding <b>is part of</b> link: click on the source, and then on the target.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-actor-link-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Occupies',
            action: ui.STATE_ADD_LINK,
            name: 'OccupiesLink',
            tooltip: 'Add an occupies link between an Agent and a Position',
            statusText: 'Adding <b>occupies</b> link: click on the source, and then on the target.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-actor-link-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Covers',
            action: ui.STATE_ADD_LINK,
            name: 'CoversLink',
            tooltip: 'Add a covers link between a Position and a Role',
            statusText: 'Adding <b>covers</b> link: click on the source, and then on the target.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-actor-link-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Plays',
            action: ui.STATE_ADD_LINK,
            name: 'PlaysLink',
            tooltip: 'Add a plays link between an Agent and a Role',
            statusText: 'Adding <b>plays</b> link: click on the source, and then on the target.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-actor-link-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'INS',
            action: ui.STATE_ADD_LINK,
            name: 'INSLink',
            tooltip: 'Add a INS link between an Agent and another Agent',
            statusText: 'Adding <b>INS</b> link: click on the source, and then on the target.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-dependency-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Goal dependency',
            action: ui.STATE_ADD_LINK,
            name: 'GoalDependencyLink',
            tooltip: 'Add a Goal Dependency link (including its dependum)',
            statusText: 'Adding <b>Goal Dependency</b> link: click first on the depender, and then on the dependee.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-dependency-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Softgoal dependency',
            action: ui.STATE_ADD_LINK,
            name: 'SoftgoalDependencyLink',
            tooltip: 'Add a Softgoal Dependency link (including its dependum)',
            statusText: 'Adding <b>Softgoal Dependency</b> link: click first on the depender, and then on the dependee.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-dependency-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Resource dependency',
            action: ui.STATE_ADD_LINK,
            name: 'ResourceDependencyLink',
            tooltip: 'Add a Resource Dependency link (including its dependum)',
            statusText: 'Adding <b>Resource Dependency</b> link: click first on the depender, and then on the dependee.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-dependency-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Task dependency',
            action: ui.STATE_ADD_LINK,
            name: 'TaskDependencyLink',
            tooltip: 'Add a Task Dependency link (including its dependum)',
            statusText: 'Adding <b>Task Dependency</b> link: click first on the depender, and then on the dependee.'
        })
    }).render();
    new uiC.AddButtonView({
        model: new uiC.AddButtonModel({
            label: 'Goal',
            action: ui.STATE_ADD_NODE,
            name: 'Goal',
            tooltip: 'Add Goal',
            statusText: 'Adding <b>Goal</b>: Click on an actor/agent/role/position to add a Goal',
            precondition: function () {
                var valid = true;
                if (istar.isEmpty()) {
                    alert('Sorry, you can only add goals on an actor/agent/role/position.');
                    valid = false;
                }
                return valid;
            }
        })
    }).render();
    new uiC.AddButtonView({
        model: new uiC.AddButtonModel({
            label: 'Task',
            action: ui.STATE_ADD_NODE,
            tooltip: 'Add Task',
            statusText: 'Adding <b>Task</b>: Click on an actor/agent/role/position to add a Task'
        })
    }).render();
    new uiC.AddButtonView({
        model: new uiC.AddButtonModel({
            label: 'Resource',
            action: ui.STATE_ADD_NODE,
            tooltip: 'Add Resource',
            statusText: 'Adding <b>Resource</b>: Click on an actor/agent/role/position to add a Resource'
        })
    }).render();
    new uiC.AddButtonView({
        model: new uiC.AddButtonModel({
            label: 'Softgoal',
            action: ui.STATE_ADD_NODE,
            name: 'Softgoal',
            tooltip: 'Add Softgoal',
            statusText: 'Adding <b>Softgoal</b>: Click on an actor/agent/role/position to add a Softgoal'
        })
    }).render();
    new uiC.AddButtonView({
        model: new uiC.AddButtonModel({
            label: 'Belief',
            action: ui.STATE_ADD_NODE,
            name: 'Belief',
            tooltip: 'Add Belief',
            statusText: 'Adding <b>Belief</b>: Click on an actor/agent/role/position to add a Belief'
        })
    }).render();
    new uiC.AddButtonView({
        model: new uiC.AddButtonModel({
            label: 'Decomposition',
            action: ui.STATE_ADD_LINK,
            name: 'DecompositionLink',
            tooltip: 'Add Decomposition link',
            statusText: 'Adding <b>Decomposition</b> link: click first on the child, and then on the parent. It can only be applied to tasks.'
        })
    }).render();
    new uiC.AddButtonView({
        model: new uiC.AddButtonModel({
            label: 'Means-ends',
            action: ui.STATE_ADD_LINK,
            name: 'MeansEndsLink',
            tooltip: 'Add Means-ends link',
            statusText: 'Adding <b>Means-ends</b> link: click first on the child, and then on the parent. It can only be applied to goals.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-contribution-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Make',
            action: ui.STATE_ADD_LINK,
            name: 'make',
            tooltip: 'Add Make Contribution link',
            statusText: 'Adding <b>Make Contribution</b> link: click first on an element and then on the Softgoal it contributes to.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-contribution-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Help',
            action: ui.STATE_ADD_LINK,
            name: 'help',
            tooltip: 'Add Help Contribution link',
            statusText: 'Adding <b>Help Contribution</b> link: click first on an element and then on the Softgoal it contributes to.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-contribution-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Some+',
            action: ui.STATE_ADD_LINK,
            name: 'some+',
            tooltip: 'Add Some+ Contribution link',
            statusText: 'Adding <b>Some+ Contribution</b> link: click first on an element and then on the Softgoal it contributes to.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-contribution-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Some-',
            action: ui.STATE_ADD_LINK,
            name: 'some-',
            tooltip: 'Add Some- Contribution link',
            statusText: 'Adding <b>Some- Contribution</b> link: click first on an element and then on the Softgoal it contributes to.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-contribution-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Hurt',
            action: ui.STATE_ADD_LINK,
            name: 'hurt',
            tooltip: 'Add Hurt Contribution link',
            statusText: 'Adding <b>Hurt Contribution</b> link: click first on an element and then on the Softgoal it contributes to.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-contribution-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Break',
            action: ui.STATE_ADD_LINK,
            name: 'break',
            tooltip: 'Add Break Contribution link',
            statusText: 'Adding <b>Break Contribution</b> link: click first on an element and then on the Softgoal it contributes to.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-contribution-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Unknown',
            action: ui.STATE_ADD_LINK,
            name: 'unknown',
            tooltip: 'Add Unknown Contribution link',
            statusText: 'Adding <b>Unknown Contribution</b> link: click first on an element and then on the Softgoal it contributes to.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-contribution-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'And',
            action: ui.STATE_ADD_LINK,
            name: 'and',
            tooltip: 'Add And Contribution link',
            statusText: 'Adding <b>And Contribution</b> link: click first on an element and then on the Softgoal it contributes to.'
        })
    }).render();
    new uiC.AddButtonDropdownItemView({
        attributes: {parent: '#add-contribution-dropdown'},
        model: new uiC.AddButtonModel({
            label: 'Or',
            action: ui.STATE_ADD_LINK,
            name: 'or',
            tooltip: 'Add Or Contribution link',
            statusText: 'Adding <b>Or Contribution</b> link: click first on an element and then on the Softgoal it contributes to.'
        })
    }).render();
};