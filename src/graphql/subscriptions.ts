/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoutine = /* GraphQL */ `
  subscription OnCreateRoutine($filter: ModelSubscriptionRoutineFilterInput) {
    onCreateRoutine(filter: $filter) {
      id
      name
      sub
      days
      sections {
        items {
          name
          sub
          id
          createdAt
          updatedAt
          routineSectionsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
          name
          sub
          id
          createdAt
          updatedAt
          routineSectionsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
          name
          sub
          id
          createdAt
          updatedAt
          routineSectionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection($filter: ModelSubscriptionSectionFilterInput) {
    onCreateSection(filter: $filter) {
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
        createdAt
        updatedAt
      }
      workouts {
        items {
          id
          name
          sub
          type
          notes
          createdAt
          updatedAt
          sectionWorkoutsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      routineSectionsId
    }
  }
`;
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection($filter: ModelSubscriptionSectionFilterInput) {
    onUpdateSection(filter: $filter) {
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
        createdAt
        updatedAt
      }
      workouts {
        items {
          id
          name
          sub
          type
          notes
          createdAt
          updatedAt
          sectionWorkoutsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      routineSectionsId
    }
  }
`;
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection($filter: ModelSubscriptionSectionFilterInput) {
    onDeleteSection(filter: $filter) {
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
        createdAt
        updatedAt
      }
      workouts {
        items {
          id
          name
          sub
          type
          notes
          createdAt
          updatedAt
          sectionWorkoutsId
        }
        nextToken
      }
      id
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
          name
          timestamp
          notes
          id
          createdAt
          updatedAt
          workoutLogsId
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
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
          name
          timestamp
          notes
          id
          createdAt
          updatedAt
          workoutLogsId
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
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
          name
          timestamp
          notes
          id
          createdAt
          updatedAt
          workoutLogsId
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      sectionWorkoutsId
    }
  }
`;
export const onCreateLog = /* GraphQL */ `
  subscription OnCreateLog($filter: ModelSubscriptionLogFilterInput) {
    onCreateLog(filter: $filter) {
      name
      timestamp
      sets {
        items {
          weight
          reps
          id
          createdAt
          updatedAt
          logSetsId
        }
        nextToken
      }
      notes
      id
      createdAt
      updatedAt
      workoutLogsId
    }
  }
`;
export const onUpdateLog = /* GraphQL */ `
  subscription OnUpdateLog($filter: ModelSubscriptionLogFilterInput) {
    onUpdateLog(filter: $filter) {
      name
      timestamp
      sets {
        items {
          weight
          reps
          id
          createdAt
          updatedAt
          logSetsId
        }
        nextToken
      }
      notes
      id
      createdAt
      updatedAt
      workoutLogsId
    }
  }
`;
export const onDeleteLog = /* GraphQL */ `
  subscription OnDeleteLog($filter: ModelSubscriptionLogFilterInput) {
    onDeleteLog(filter: $filter) {
      name
      timestamp
      sets {
        items {
          weight
          reps
          id
          createdAt
          updatedAt
          logSetsId
        }
        nextToken
      }
      notes
      id
      createdAt
      updatedAt
      workoutLogsId
    }
  }
`;
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet($filter: ModelSubscriptionSetFilterInput) {
    onCreateSet(filter: $filter) {
      weight
      reps
      id
      createdAt
      updatedAt
      logSetsId
    }
  }
`;
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet($filter: ModelSubscriptionSetFilterInput) {
    onUpdateSet(filter: $filter) {
      weight
      reps
      id
      createdAt
      updatedAt
      logSetsId
    }
  }
`;
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet($filter: ModelSubscriptionSetFilterInput) {
    onDeleteSet(filter: $filter) {
      weight
      reps
      id
      createdAt
      updatedAt
      logSetsId
    }
  }
`;
