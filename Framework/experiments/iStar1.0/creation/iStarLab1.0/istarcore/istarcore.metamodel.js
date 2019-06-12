/**
 * An object that defines the metamodel to be used.
 * By default, each Cell (Element or Link) is valid. However,
 *  you can define your own isValid functions to constrain the addition of elements in a model.
 *  For examples, see the nodeLink definitions;
 *
 * @typedef metamodel
 * @type {object}
 * @property {string} prefix
 * @property {string} version - written in the format 'a.b'
 * @property {object} containers
 * @property {object} nodes
 * @property {object} containerLinks
 * @property {object} dependencyLinks
 * @property {object} nodeLinks
 *
 * @type {metamodel}
 */
istar.metamodel = {
    /** A prefix to use when loading and saving the model */
    /** @type {string} */
    prefix: 'istar',

    /**
     * Identify the version of the metamodel
     * @example
     * version: '0.1'
     @type {string}
     */
    version: '0.2',

    /** An object containing the definition of the shapes that are used in this metamodel*/
    /** @type {Object} */
    shapesObject: joint.shapes.istar,

    //Add here the elements of your language that behave like actors, in the sense that they are containers
    // onto which inner elements are added
    /** @type {Object} */
    containers: {
        'Actor': {
            'name': 'Actor'
        },
        'Agent': {
            'name': 'Agent'
        },
        'Role': {
            'name': 'Role'
        },
        'Position': {
            'name': 'Position'
        }
    },

    //Add here the elements of your language that do not behave like actors, i.e., they are not containers;
    //They can be inner elements, dependums, or both
    /** @type {Object} */
    nodes: {
        'Goal': {
            'name': 'Goal',
            'canBeInnerElement': true,
            'canBeDependum': true
        },
        'Softgoal': {
            'name': 'Softgoal',
            'canBeInnerElement': true,
            'canBeDependum': true
        },
        'Task': {
            'name': 'Task',
            'canBeInnerElement': true,
            'canBeDependum': true
        },
        'Resource': {
            'name': 'Resource',
            'canBeInnerElement': true,
            'canBeDependum': true,
        },
        'Belief': {
            'name': 'Belief',
            'canBeInnerElement': true,
            'canBeDependum': false,
        }
    },

    //Add here the links of your language that directly relate a container with another container (e.g., an Actor
    // to another actor).
    //Links may have a isValid function that constrain their instantiation
    /** @type {Object} */
    containerLinks: {
        'IsALink': {
            'name': 'IsALink',
            'isValid': function (source, target) {
                // actor->actor; agent->agent; role->role; position->position
                // - Only general actors can be specialized into general actors, or agents into agents, roles into roles, and positions into positions
                // - There should be no is-a cycles (ignored)
                // - A pair of actors can be linked by at most one association link: it is not possible to
                //   connect two actors via both is-a

                var result = {};
                var isValid = true;
                if ( ! ( source.isActor() || source.isAgent() || source.isRole() || source.isPosition() ) ) {
                    isValid = false;
                    result.message = 'the source of Is-a links must be a general Actor, an Agent, a Role, or a Position';
                }
                if ( isValid && ! ( target.isActor() || source.isAgent() || source.isRole() || source.isPosition() ) ) {
                    isValid = false;
                    result.message = 'the target of Is-a links must be a general Actor, an Agent, a Role, or a Position';
                }
                if ( isValid && (source === target) ) {
                    isValid = false;
                    result.message = 'you cannot make Is-a links from an actor onto itself';
                }
                if ( isValid && (source.get('type') !== target.get('type')) ) {
                    isValid = false;
                    result.message = 'the source and target of Is-a links must be of the same type - Actor and Actor, Agent and Agent, Role and Role, or Position and Position';
                }
                if ( isValid && istar.isThereLinkBetween(source, target)) {
                    isValid = false;
                    result.message = 'there can only be one Actor link between the same two actors';
                }

                result.isValid = isValid;
                return result;
            }
        },
        'IsPartOfLink': {
            'name': 'IsPartOfLink',
            'isValid': function (source, target) {
                // actor->actor; agent->agent; role->role; position->position
                // - Only general actors can be specialized into general actors, or agents into agents, roles into roles, and positions into positions
                // - There should be no is-part-of cycles (ignored)
                // - A pair of actors can be linked by at most one association link: it is not possible to
                //   connect two actors via both is-part-of

                var result = {};
                var isValid = true;
                if ( ! ( source.isActor() || source.isAgent() || source.isRole() || source.isPosition() ) ) {
                    isValid = false;
                    result.message = 'the source of Is-part-of links must be a general Actor, an Agent, a Role, or a Position';
                }
                if ( isValid && ! ( target.isActor() || source.isAgent() || source.isRole() || source.isPosition() ) ) {
                    isValid = false;
                    result.message = 'the target of Is-part-of links must be a general Actor, an Agent, a Role, or a Position';
                }
                if ( isValid && (source === target) ) {
                    isValid = false;
                    result.message = 'you cannot make Is-part-of links from an actor onto itself';
                }
                if ( isValid && (source.get('type') !== target.get('type')) ) {
                    isValid = false;
                    result.message = 'the source and target of Is-part-of links must be of the same type - Actor and Actor, Agent and Agent, Role and Role, or Position and Position';
                }
                if ( isValid && istar.isThereLinkBetween(source, target)) {
                    isValid = false;
                    result.message = 'there can only be one Association link between the same two actors';
                }

                result.isValid = isValid;
                return result;
            }
        },
        'OccupiesLink': {
            'name': 'OccupiesLink',
            'isValid': function (source, target) {
                // agent->position
                // - Only agents can occupy a position, only positions can be occupied
                // - There should be no occupies cycles (ignored)
                // - A pair of actors can be linked by at most one association link: it is not possible to
                //   connect two actors via both occupies

                var result =  {};
                var isValid = true;
                if ( ! ( source.isAgent() ) ) {
                    isValid = false;
                    result.message = 'the source of Occupies links must be an Agent';
                }
                if ( isValid && ! ( target.isPosition() ) ) {
                    isValid = false;
                    result.message = 'the target of Occupies links must be a Position';
                }
                if ( isValid && istar.isThereLinkBetween(source, target)) {
                    isValid = false;
                    result.message = 'there can only be one Occupies link between the same two actors';
                }

                result.isValid = isValid;
                return result;
            }
        },
        'CoversLink': {
            'name': 'CoversLink',
            'isValid': function(source, target) {
                // position->role
                // - Only positions can cover a role, only roles are covered
                // - There should be no covers cycles (ignored)
                // - A pair of actors can be linked by at most one association link: it is not possible to
                //   connect two actors via both covers

                var result =  {};
                var isValid = true;
                if ( ! ( source.isPosition() ) ) {
                    isValid = false;
                    result.message = 'the source of Covers links must be a Position';
                }
                if ( isValid && ! ( target.isRole() ) ) {
                    isValid = false;
                    result.message = 'the target of Covers links must be a Role';
                }
                if ( isValid && istar.isThereLinkBetween(source, target)) {
                    isValid = false;
                    result.message = 'there can only be one Covers link between the same two actors';
                }

                result.isValid = isValid;
                return result;
            }
        },
        'PlaysLink': {
            'name': 'PlaysLink',
            'isValid': function(source, target) {
                // agent->role
                // - Only agents can play a role, only roles can be played
                // - There should be no plays cycles (ignored)
                // - A pair of actors can be linked by at most one association link: it is not possible to
                //   connect two actors via both plays

                var result = {};
                var isValid = true;
                if ( ! ( source.isAgent() ) ) {
                    isValid = false;
                    result.message = 'the source of Plays links must be an Agent';
                }
                if ( isValid && ! ( target.isRole() ) ) {
                    isValid = false;
                    result.message = 'the target of Plays links must be a Role';
                }
                if ( isValid && istar.isThereLinkBetween(source, target)) {
                    isValid = false;
                    result.message = 'there can only be one Plays link between the same two actors';
                }

                result.isValid = isValid;
                return result;
            }
        },
        'INSLink': {
            'name': 'INSLink',
            'isValid': function(source, target) {
                // agent->agent
                // Only agents can be instantiated into agents
                // - There should be no INS cycles (ignored)
                // - A pair of actors can be linked by at most one association link: it is not possible to
                //   connect two actors via both INS

                var result = {};
                var isValid = true;
                if ( ! ( source.isAgent() ) ) {
                    isValid = false;
                    result.message = 'the source of INS links must be an Agent';
                }
                if ( isValid && ! ( target.isAgent() ) ) {
                    isValid = false;
                    result.message = 'the target of INS links must be an Agent';
                }
                if ( isValid && istar.isThereLinkBetween(source, target)) {
                    isValid = false;
                    result.message = 'there can only be one INS link between the same two actors';
                }

                result.isValid = isValid;
                return result;
            }
        }
    },

    //Add here the links of your language that behave like a Dependency link: they link a container with
    // another container while having a node in the middle
    //Links may have a isValid function that constrain their instantiation
    dependencyLinks: {
        'DependencyLink': {
            'name': 'DependencyLink',
            'isValid': function (source, target) {
                //istar 2.0:
                //- When a depender depends on the dependee for its dependerElmt, the depender
                //  cannot or chooses not to satisfy/perform/have the dependerElmt on its own.
                //  Thus, the dependerElmt cannot be refined or contributed to (page 9)
                //- Dependency relationships should not share the same dependum, as each dependum is
                //  a conceptually different element (page 9)

                var result = {};
                var isValid = true;

                //identify who is the actor - the elements themselves, or their parents
                var sourceParentId;
                var targetParentId;
                if (source.isKindOfActor()) {
                    sourceParentId = source.id;
                } else if (source.isKindOfInnerElement()) {
                    sourceParentId = source.attributes.parent;
                }

                if (target.isKindOfActor()) {
                    targetParentId = target.id;
                } else if (target.isKindOfInnerElement()) {
                    targetParentId = target.attributes.parent;
                }

                if (source.isLink()) {
                    isValid = false;
                    result.message = 'the source of a Dependency link cannot be a link';
                }
                if (isValid && target.isLink()) {
                    isValid = false;
                    result.message = 'the target of a Dependency link cannot be a link';
                }
                if (isValid && (source === target)) {
                    isValid = false;
                    result.message = 'a Dependency link cannot link an element onto itself';
                }
                if (isValid && source.isDependum()) {
                    isValid = false;
                    result.message = 'a Dependency link cannot start from a dependum';
                }
                if (isValid && target.isDependum()) {
                    isValid = false;
                    result.message = 'a Dependency link cannot end in a dependum';
                }
                if (isValid && sourceParentId === targetParentId) {
                    isValid = false;
                    result.message = 'a Dependency link must involve two different actors (iStar 2.0 Guide, Page 14)';
                }
                if (isValid && (istar.isTargetOf(source, 'MeansEndsLink') || istar.isTargetOf(source, 'DecompositionLink'))) {
                    isValid = false;
                    result.message = 'a refined element cannot be the Depender Element in a Dependency link (iStar 2.0 Guide, Page 14)';
                }
                if (isValid && istar.isTargetOf(source, 'ContributionLink')) {
                    isValid = false;
                    result.message = 'a contributed element cannot be the Depender Element in a Dependency link (iStar 2.0 Guide, Page 14)';
                }

                result.isValid = isValid;
                return result;
            }
        }
    },
    //Add here the links of your language that relate a node with another node
    //Links may have a isValid function that constrain their instantiation
    /** @type {Object} */
    nodeLinks: {
        'DecompositionLink': {
            'name': 'DecompositionLink',
            'isValid': function (source, target) {
                //task->goal; task->task; task->resource; task->softgoal
                //- ...the fulfillment of all the n children (n ≥ 2) (ignored)
                // - The relationships between intentional elements (contributesTo, qualifies, neededBy, refines)
                //  apply only to elements that are wanted by the same actor
                //- For a dependency, if a dependerElmt x exists, then x cannot be refined or
                //   contributed to
                //- The refinement relationship should not lead to refinement cycles
                //  (e.g., G ORrefined to G1 and G1 OR-refined to G, G OR-refined to G, etc.)  (ignored)

                var result = {};
                var isValid = true;
                if ( ! ( target.isTask() ) ) {
                    isValid = false;
                    result.message = 'the target of a Decomposition link must be a Task';
                }
                if ( isValid && ! ( source.isGoal() || source.isTask() || source.isResource() || source.isSoftgoal() ) ) {
                    isValid = false;
                    result.message = 'the source of a Decomposition link must be a Goal, Task, Resource, or Softgoal ';
                }
                if ( isValid && (source === target) ) {
                    isValid = false;
                    result.message = 'you cannot make an Decomposition link from an element onto itself';
                }
                if ( isValid && (source.isDependum() || target.isDependum()) ) {
                    isValid = false;
                    result.message = 'you cannot make an Decomposition link with a dependum';
                }
                if ( isValid && (source.attributes.parent !== target.attributes.parent) ) {
                    isValid = false;
                    result.message = 'the source and target of a Decomposition link must pertain to the same actor';
                }
                if ( isValid && istar.isThereLinkBetween(source, target)) {
                    isValid = false;
                    result.message = 'there can only be one Decomposition link between the same two elements';
                }
                if ( isValid && istar.isSourceOf(target, 'DependencyLink')) {
                    isValid = false;
                    result.message = 'you cannot decompose a Depender Element; that is, an element that is the source of a Dependency';
                }
                /*if ( isValid && istar.isTargetOf(target, 'MeansEndsLink')) {
                    isValid = false;
                    result.message = 'you cannot mix AND-refinements with OR-refinements targeting the same element ' +
                        '<br><br> Example of a wrong model:<br>' +
                        '<img src="images/errors/mixAndAndOr.svg" alt="An element may be AND-refined or OR-refined, but not both"/>';
                }*/

                result.isValid = isValid;
                return result;
            }
        },
        'MeansEndsLink': {
            'name': 'MeansEndsLink',
            'isValid': function (source, target) {
                //istar 2.0:
                //goal->task
                //- The relationships between intentional elements (contributesTo, qualifies, neededBy, refines)
                //  apply only to elements that are wanted by the same actor
                //- For a dependency, if a dependerElmt x exists, then x cannot be refined or
                //   contributed to
                //- The refinement relationship should not lead to refinement cycles
                //  (e.g., G OR-refined to G1 and G1 OR-refined to G, G OR-refined to G, etc.) (ignored)

                var result = {};
                var isValid = true;
                if ( ! ( source.isTask() ) ) {
                    isValid = false;
                    result.message = 'the source of an Means-ends link must be a Task';
                }
                if ( isValid && ! ( target.isGoal() )  ) {
                    isValid = false;
                    result.message = 'the target of an Means-ends link must be a Goal';
                }
                if ( isValid && (source === target) ) {
                    isValid = false;
                    result.message = 'you cannot make an Means-ends link from an element onto itself';
                }
                if ( isValid && (source.isDependum() || target.isDependum()) ) {
                    isValid = false;
                    result.message = 'you cannot make an Means-ends link with a dependum';
                }
                if ( isValid && (source.attributes.parent !== target.attributes.parent) ) {
                    isValid = false;
                    result.message = 'the source and target of a Means-ends link must pertain to the same actor';
                }
                if ( isValid && istar.isThereLinkBetween(source, target)) {
                    isValid = false;
                    result.message = 'there can only be one Means-ends link between the same two elements';
                }
                if ( isValid && istar.isSourceOf(target, 'DependencyLink')) {
                    isValid = false;
                    result.message = 'you cannot refine a Depender Element; that is, an element that is the source of a Dependency';
                }
                /*if ( isValid && istar.isTargetOf(target, 'DecompositionLink')) {
                    isValid = false;
                    result.message = 'you cannot mix OR-refinements with AND-refinements targeting the same element ' +
                        '(iStar 2.0 Guide, Page 10)<br><br> Example of a wrong model:<br>' +
                        '<img src="images/errors/mixAndAndOr.svg" alt="An element may be AND-refined or OR-refined, but not both"/>';
                }*/

                result.isValid = isValid;
                return result;
            }
        },
        'ContributionLink': {
            'name': 'ContributionLink',
            'isValid': function (source, target) {
                //istar 2.0
                //goal->softgoal; task->softgoal; softgoal->softgoal; belief->softgoal
                //- The relationships between intentional elements (contributesTo, qualifies, neededBy, refines)
                //  apply only to elements that are wanted by the same actor
                //– An intentional element and a softgoal can be linked by either a contributesTo
                //  relationship or a qualifies relationship, but not by both
                //– It is not possible for a softgoal to contribute to itself

                var result = {};
                var isValid = true;
                if ( ! ( source.isGoal() || source.isTask() || source.isSoftgoal() ||  source.isBelief() ) ) {
                    isValid = false;
                    result.message = 'the source of a Contribution link must be a Goal, a Task, a Softgoal, or a Belief';
                }
                if ( isValid && ! (target.isSoftgoal() ) ) {
                    isValid = false;
                    result.message = 'the target of a Contribution link must be a Softgoal';
                }
                if ( isValid && (source === target) ) {
                    isValid = false;
                    result.message = 'you cannot make a Contribution link from an element onto itself';
                }
                if ( isValid && (source.isDependum() || target.isDependum()) ) {
                    isValid = false;
                    result.message = 'you cannot make a Contribution link with a dependum';
                }
                if ( isValid && (source.attributes.parent !== target.attributes.parent) ) {
                    isValid = false;
                    result.message = 'the source and target of an a Contribution link must pertain to the same actor';
                }
                if ( isValid && istar.isThereLinkBetween(source, target, 'ContributionLink')) {
                    isValid = false;
                    result.message = 'there can only be one Contribution link between the same two elements';
                }
                if ( isValid && istar.isSourceOf(target, 'DependencyLink')) {
                    isValid = false;
                    result.message = 'you cannot contribute to a Depender Element; that is, an element that is the source of a Dependency';
                }

                result.isValid = isValid;
                return result;
            },
            'changeableLabel': true,
            'possibleLabels': ['make', 'help', 'hurt', 'break', 'some+', 'some-', 'and', 'or', 'unknown']
        }
    }
};

/*definition of globals to prevent undue JSHint warnings*/
/*globals istar:false, joint:false */