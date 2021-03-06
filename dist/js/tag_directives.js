angular.module('mainModule').directive('autoComplete',['$http',function($http){
    return {
        restrict:'AE',
        scope:{
            selectedTags:'=model'
        },
        templateUrl:'partials/autocomplete-template.html',
        link:function(scope,elem,attrs){

            scope.suggestions = ['Raj', 'Vignesg', 'Subbulakshmi', 'Vidhya'];

            scope.selectedTags = [];

            scope.selectedIndex=-1;

            scope.removeTag=function(index){
                scope.selectedTags.splice(index,1);
            }

            scope.search=function(){
                scope.selectedIndex=-1;
                scope.startSearch = (scope.searchText !== '');
            }

            scope.addToSelectedTags=function(index){
                if(scope.selectedTags.indexOf(scope.suggestions[index])===-1){
                    scope.selectedTags.push(scope.suggestions[index]);
                    scope.searchText='';
                }
            }

            scope.checkKeyDown=function(event){
                if(event.keyCode===40){
                    event.preventDefault();
                    if(scope.selectedIndex+1 !== scope.suggestions.length){
                        scope.selectedIndex++;
                    }
                }
                else if(event.keyCode===38){
                    event.preventDefault();
                    if(scope.selectedIndex-1 !== -1){
                        scope.selectedIndex--;
                    }
                }
                else if(event.keyCode===13){
                    scope.addToSelectedTags(scope.selectedIndex);
                }
            }

            scope.$watch('selectedIndex',function(val){
                if(val!==-1) {
                    scope.searchText = scope.suggestions[scope.selectedIndex];
                }
            });
        }
    }
}]);