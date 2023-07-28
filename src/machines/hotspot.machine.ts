import { type ActorRefFrom, assign, createMachine, sendParent } from 'xstate';
import { personMachine } from './person.machine';

export const hotspotMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QAkD2AXWAHDBiVAdgIIQQAKYATrIQNoAMAuoqDrAJbruEsgAeiALQAmAIwBWAHTCAHKOHiAzPRnCAbAHYtwgDQgAnolH0NkgJz01wsQBZFcs2dkBfZ3rSYc6fAQBKYAFtUADcwCmo6Jl42Tm4CXgEERXFhSWVxDUUNYXphDRszGQ09QwQNNTSzcTV6Gy1jezNXdwxsPEIAVSwIAEN0MKoaAgZmJBAYrh4xxNEbGXMxItFM4SdakqE1cWaQDzb0SS7ergIocKHYXD5YdD6wSR6AM37KAApjenoASlw9r0Pun12KdzoRYCNoqgOJN4tMjKpzCk5EplA1rBsEDZcpINDJFPIPmo7AVtjsCKgIHBeH8MJDoXEEogsZI1MtRGotvRCuJRHIMQpRNI8fINJZHLM1DsaQcjkCQYMwXTYlNQIkZPNWRp2ZzubzRBilBV8cI5iozKJ5IobK5XEA */
    id: 'Hotspot',
    description:
      'A hotspot is a point of interest where you can drop a person to interact with the it.',
    context: {
      maxPersons: 3,
      persons: [],
      name: 'GenericHotspot',
    },
    initial: 'Ticking',
    states: {
      Ticking: {
        after: {
          '500': [
            {
              actions: 'updatePersons',
              target: 'Ticking',
            },
            {
              actions: 'updateHype',
              target: 'Ticking',
            },
          ],
        },
      },
    },
    on: {
      onRegisterPerson: {
        actions: assign((context, event) => {
          console.log(
            'hotspot.onRegisterPerson - adding the person to the hotspot context',
          );
          return {
            ...context,
            persons: [...context.persons, event.person],
          };
        }),
        // actions: 'test',
      },
      onUnregisterPerson: {
        // cond: (context, event) => {
        //   console.log(
        //     'hotspot.onUnregisterPerson - checking if the person is in the hotspot',
        //   );
        //   const isAlreadyInHotspot = Boolean(
        //     context.persons.find((p) => p.id === event.person.id),
        //   );
        //   return isAlreadyInHotspot;
        // },
        actions: assign((context, event) => {
          console.log(
            'hotspot.onUnregisterPerson - removing the person to the hotspot context',
          );
          return {
            ...context,
            persons: context.persons.filter((p) => p.id !== event.person.id),
          };
        }),
      },
    },
    schema: {
      context: {} as {
        persons: ActorRefFrom<typeof personMachine>[];
        maxPersons: number;
        name: string;
      },
      events: {} as
        | { type: 'onUpdatePerson' }
        | {
            type: 'onRegisterPerson';
            person: ActorRefFrom<typeof personMachine>;
          }
        | {
            type: 'onUnregisterPerson';
            person: ActorRefFrom<typeof personMachine>;
          },
      actions: {} as { type: 'updatePersons' } | { type: 'updateHype' },
    },
    predictableActionArguments: true,
    preserveActionOrder: true,
    tsTypes: {} as import('./hotspot.machine.typegen').Typegen0,
  },
  {
    actions: {
      updateHype: (context) => {
        if (context.persons.length < 1) return context;
        sendParent({
          type: 'onIncrementHype',
          hype: context.persons.length * 0.2,
        });
        return context;
      },
    },
  },
);
