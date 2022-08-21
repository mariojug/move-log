/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      sub
      workouts {
        items {
          id
          name
          sub
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          sectionWorkoutsId
        }
        nextToken
      }
      routines {
        items {
          id
          name
          sub
          days
          notes
          createdAt
          updatedAt
          userRoutinesId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      sub
      workouts {
        items {
          id
          name
          sub
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          sectionWorkoutsId
        }
        nextToken
      }
      routines {
        items {
          id
          name
          sub
          days
          notes
          createdAt
          updatedAt
          userRoutinesId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      sub
      workouts {
        items {
          id
          name
          sub
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          sectionWorkoutsId
        }
        nextToken
      }
      routines {
        items {
          id
          name
          sub
          days
          notes
          createdAt
          updatedAt
          userRoutinesId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRoutine = /* GraphQL */ `
  subscription OnCreateRoutine($filter: ModelSubscriptionRoutineFilterInput) {
    onCreateRoutine(filter: $filter) {
      id
      name
      sub
      days
      sections {
        items {
          id
          name
          sub
          createdAt
          updatedAt
          routineSectionsId
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      userRoutinesId
    }
  }
`;
export const onUpdateRoutine = /* GraphQL */ `
  subscription OnUpdateRoutine($filter: ModelSubscriptionRoutineFilterInput) {
    onUpdateRoutine(filter: $filter) {
      id
      name
      sub
      days
      sections {
        items {
          id
          name
          sub
          createdAt
          updatedAt
          routineSectionsId
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      userRoutinesId
    }
  }
`;
export const onDeleteRoutine = /* GraphQL */ `
  subscription OnDeleteRoutine($filter: ModelSubscriptionRoutineFilterInput) {
    onDeleteRoutine(filter: $filter) {
      id
      name
      sub
      days
      sections {
        items {
          id
          name
          sub
          createdAt
          updatedAt
          routineSectionsId
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      userRoutinesId
    }
  }
`;
export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection($filter: ModelSubscriptionSectionFilterInput) {
    onCreateSection(filter: $filter) {
      id
      name
      sub
      routine {
        id
        name
        sub
        days
        sections {
          nextToken
        }
        notes
        createdAt
        updatedAt
        userRoutinesId
      }
      workouts {
        items {
          id
          name
          sub
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          sectionWorkoutsId
        }
        nextToken
      }
      createdAt
      updatedAt
      routineSectionsId
    }
  }
`;
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection($filter: ModelSubscriptionSectionFilterInput) {
    onUpdateSection(filter: $filter) {
      id
      name
      sub
      routine {
        id
        name
        sub
        days
        sections {
          nextToken
        }
        notes
        createdAt
        updatedAt
        userRoutinesId
      }
      workouts {
        items {
          id
          name
          sub
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          sectionWorkoutsId
        }
        nextToken
      }
      createdAt
      updatedAt
      routineSectionsId
    }
  }
`;
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection($filter: ModelSubscriptionSectionFilterInput) {
    onDeleteSection(filter: $filter) {
      id
      name
      sub
      routine {
        id
        name
        sub
        days
        sections {
          nextToken
        }
        notes
        createdAt
        updatedAt
        userRoutinesId
      }
      workouts {
        items {
          id
          name
          sub
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          sectionWorkoutsId
        }
        nextToken
      }
      createdAt
      updatedAt
      routineSectionsId
    }
  }
`;
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onCreateWorkout(filter: $filter) {
      id
      name
      sub
      type
      logs {
        items {
          id
          name
          timestamp
          notes
          units
          createdAt
          updatedAt
          workoutLogsId
        }
        nextToken
      }
      notes
      units
      targetSetRange
      targetRepRange
      targetDurationRange
      createdAt
      updatedAt
      userWorkoutsId
      sectionWorkoutsId
    }
  }
`;
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onUpdateWorkout(filter: $filter) {
      id
      name
      sub
      type
      logs {
        items {
          id
          name
          timestamp
          notes
          units
          createdAt
          updatedAt
          workoutLogsId
        }
        nextToken
      }
      notes
      units
      targetSetRange
      targetRepRange
      targetDurationRange
      createdAt
      updatedAt
      userWorkoutsId
      sectionWorkoutsId
    }
  }
`;
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onDeleteWorkout(filter: $filter) {
      id
      name
      sub
      type
      logs {
        items {
          id
          name
          timestamp
          notes
          units
          createdAt
          updatedAt
          workoutLogsId
        }
        nextToken
      }
      notes
      units
      targetSetRange
      targetRepRange
      targetDurationRange
      createdAt
      updatedAt
      userWorkoutsId
      sectionWorkoutsId
    }
  }
`;
export const onCreateLog = /* GraphQL */ `
  subscription OnCreateLog($filter: ModelSubscriptionLogFilterInput) {
    onCreateLog(filter: $filter) {
      id
      name
      timestamp
      sets {
        items {
          id
          weight
          reps
          duration
          units
          createdAt
          updatedAt
          logSetsId
        }
        nextToken
      }
      notes
      units
      createdAt
      updatedAt
      workoutLogsId
    }
  }
`;
export const onUpdateLog = /* GraphQL */ `
  subscription OnUpdateLog($filter: ModelSubscriptionLogFilterInput) {
    onUpdateLog(filter: $filter) {
      id
      name
      timestamp
      sets {
        items {
          id
          weight
          reps
          duration
          units
          createdAt
          updatedAt
          logSetsId
        }
        nextToken
      }
      notes
      units
      createdAt
      updatedAt
      workoutLogsId
    }
  }
`;
export const onDeleteLog = /* GraphQL */ `
  subscription OnDeleteLog($filter: ModelSubscriptionLogFilterInput) {
    onDeleteLog(filter: $filter) {
      id
      name
      timestamp
      sets {
        items {
          id
          weight
          reps
          duration
          units
          createdAt
          updatedAt
          logSetsId
        }
        nextToken
      }
      notes
      units
      createdAt
      updatedAt
      workoutLogsId
    }
  }
`;
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet($filter: ModelSubscriptionSetFilterInput) {
    onCreateSet(filter: $filter) {
      id
      weight
      reps
      duration
      units
      createdAt
      updatedAt
      logSetsId
    }
  }
`;
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet($filter: ModelSubscriptionSetFilterInput) {
    onUpdateSet(filter: $filter) {
      id
      weight
      reps
      duration
      units
      createdAt
      updatedAt
      logSetsId
    }
  }
`;
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet($filter: ModelSubscriptionSetFilterInput) {
    onDeleteSet(filter: $filter) {
      id
      weight
      reps
      duration
      units
      createdAt
      updatedAt
      logSetsId
    }
  }
`;
