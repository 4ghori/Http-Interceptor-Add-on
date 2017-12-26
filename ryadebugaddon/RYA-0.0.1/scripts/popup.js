"use strict";function updateHandleBar(a){var e=document.getElementById("warningDialog");a.warningClass.length>0?e.classList.contains(a.warningClass)||e.classList.add(a.warningClass):e.classList.contains("hide")&&e.classList.remove("hide");for(var e=document.getElementById("logBody"),t="",n=' <tr class="{{type}}"><td>{{placeguid}}</td><td>{{requestURL}}</td></tr>',r=0;r<a.rLog.length;r++)t+=n,t=t.replace("{{type}}",a.rLog[r].type),t=t.replace("{{placeguid}}",a.rLog[r].placeguid),t=t.replace("{{requestURL}}",a.rLog[r].url);e.innerHTML=t}var thisTab="-1";document.getElementById("filterForm").onsubmit=function(){console.log(document.getElementById("adType").value)};var intialData={warningClass:"",rLog:""};updateHandleBar(intialData),chrome.storage.local.get(function(a){var e=a.activeTab.tabId;if(thisTab=e,e>=0&&a[e]&&a[e].length>0){var t={warningClass:"hide",rLog:a[e]};updateHandleBar(t)}}),chrome.storage.onChanged.addListener(function(a,e){if(a[thisTab]){var t={warningClass:"hide",rLog:a[thisTab].newValue};updateHandleBar(t)}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvcG9wdXAuanMiXSwibmFtZXMiOlsidXBkYXRlSGFuZGxlQmFyIiwianNvbkRhdGEiLCJ3YXJuaW5nRGlhbG9nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndhcm5pbmdDbGFzcyIsImxlbmd0aCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwicmVtb3ZlIiwiY0hUTUwiLCJiYXNlIiwiaSIsInJMb2ciLCJyZXBsYWNlIiwidHlwZSIsInBsYWNlZ3VpZCIsInVybCIsImlubmVySFRNTCIsInRoaXNUYWIiLCJvbnN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsImludGlhbERhdGEiLCJjaHJvbWUiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJkYXRhIiwiYWN0aXZlVGFiSWQiLCJhY3RpdmVUYWIiLCJ0YWJJZCIsInBvcHVwRGF0YSIsIm9uQ2hhbmdlZCIsImFkZExpc3RlbmVyIiwiY2hhbmdlcyIsImFyZWFOYW1lIiwibmV3VmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBNENBLFNBQVNBLGlCQUFnQkMsR0FDdkIsR0FBSUMsR0FBZ0JDLFNBQVNDLGVBQWUsZ0JBQ3hDSCxHQUFTSSxhQUFhQyxPQUFTLEVBQzVCSixFQUFjSyxVQUFVQyxTQUFTUCxFQUFTSSxlQUM3Q0gsRUFBY0ssVUFBVUUsSUFBSVIsRUFBU0ksY0FHbkNILEVBQWNLLFVBQVVDLFNBQVMsU0FDbkNOLEVBQWNLLFVBQVVHLE9BQU8sT0FNbkMsS0FBSyxHQUhEUixHQUFnQkMsU0FBU0MsZUFBZSxXQUN4Q08sRUFBUSxHQUNSQyxFQUFPLDJFQUNGQyxFQUFJLEVBQUdBLEVBQUlaLEVBQVNhLEtBQUtSLE9BQVFPLElBQ3hDRixHQUFTQyxFQUNURCxFQUFRQSxFQUFNSSxRQUFRLFdBQWdCZCxFQUFTYSxLQUFLRCxHQUFHRyxNQUN2REwsRUFBUUEsRUFBTUksUUFBUSxnQkFBcUJkLEVBQVNhLEtBQUtELEdBQUdJLFdBQzVETixFQUFRQSxFQUFNSSxRQUFRLGlCQUFzQmQsRUFBU2EsS0FBS0QsR0FBR0ssSUFFL0RoQixHQUFjaUIsVUFBWVIsRUF6RDVCLEdBQUlTLFNBQVUsSUFFZGpCLFVBQVNDLGVBQWUsY0FBY2lCLFNBQVcsV0FDL0NDLFFBQVFDLElBQUlwQixTQUFTQyxlQUFlLFVBQVVvQixPQUVoRCxJQUFJQyxhQUNGcEIsYUFBYyxHQUNkUyxLQUFNLEdBRVJkLGlCQUFnQnlCLFlBRWhCQyxPQUFPQyxRQUFRQyxNQUFNQyxJQUFJLFNBQVVDLEdBQ2pDLEdBQUlDLEdBQWNELEVBQUtFLFVBQVVDLEtBRWpDLElBREFiLFFBQVVXLEVBQ05BLEdBQWUsR0FDYkQsRUFBS0MsSUFDSEQsRUFBS0MsR0FBYXpCLE9BQVMsRUFBRyxDQUNoQyxHQUFJNEIsSUFDRjdCLGFBQWMsT0FDZFMsS0FBTWdCLEVBQUtDLEdBRWIvQixpQkFBZ0JrQyxNQU14QlIsT0FBT0MsUUFBUVEsVUFBVUMsWUFBWSxTQUFVQyxFQUFTQyxHQUN0RCxHQUFJRCxFQUFRakIsU0FBVSxDQUNwQixHQUFJYyxJQUNGN0IsYUFBYyxPQUNkUyxLQUFNdUIsRUFBUWpCLFNBQVNtQixTQUV6QnZDLGlCQUFnQmtDIiwiZmlsZSI6InNjcmlwdHMvcG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8vIHZhciBwb3B1cERhdGEgPSB7XG4vLyAgIHdhcm5pbmdjbGFzczonaGlkZScsXG4vLyAgIHJMb2c6Jydcbi8vIH07XG5cbnZhciB0aGlzVGFiID0gJy0xJztcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlckZvcm0nKS5vbnN1Ym1pdCA9IGZ1bmN0aW9uIGNoYW5nZUZpbHRlcigpIHtcbiAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkVHlwZScpLnZhbHVlKTtcbn07XG52YXIgaW50aWFsRGF0YSA9IHtcbiAgd2FybmluZ0NsYXNzOiAnJyxcbiAgckxvZzogJydcbn07XG51cGRhdGVIYW5kbGVCYXIoaW50aWFsRGF0YSk7XG5cbmNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChmdW5jdGlvbiAoZGF0YSkge1xuICB2YXIgYWN0aXZlVGFiSWQgPSBkYXRhLmFjdGl2ZVRhYi50YWJJZDtcbiAgdGhpc1RhYiA9IGFjdGl2ZVRhYklkO1xuICBpZiAoYWN0aXZlVGFiSWQgPj0gMCkge1xuICAgIGlmIChkYXRhW2FjdGl2ZVRhYklkXSkge1xuICAgICAgaWYgKGRhdGFbYWN0aXZlVGFiSWRdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHBvcHVwRGF0YSA9IHtcbiAgICAgICAgICB3YXJuaW5nQ2xhc3M6ICdoaWRlJyxcbiAgICAgICAgICByTG9nOiBkYXRhW2FjdGl2ZVRhYklkXVxuICAgICAgICB9O1xuICAgICAgICB1cGRhdGVIYW5kbGVCYXIocG9wdXBEYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5jaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKGNoYW5nZXMsIGFyZWFOYW1lKSB7XG4gIGlmIChjaGFuZ2VzW3RoaXNUYWJdKSB7XG4gICAgdmFyIHBvcHVwRGF0YSA9IHtcbiAgICAgIHdhcm5pbmdDbGFzczogJ2hpZGUnLFxuICAgICAgckxvZzogY2hhbmdlc1t0aGlzVGFiXS5uZXdWYWx1ZVxuICAgIH07XG4gICAgdXBkYXRlSGFuZGxlQmFyKHBvcHVwRGF0YSk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB1cGRhdGVIYW5kbGVCYXIoanNvbkRhdGEpIHtcbiAgdmFyIHdhcm5pbmdEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FybmluZ0RpYWxvZycpO1xuICBpZiAoanNvbkRhdGEud2FybmluZ0NsYXNzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoIXdhcm5pbmdEaWFsb2cuY2xhc3NMaXN0LmNvbnRhaW5zKGpzb25EYXRhLndhcm5pbmdDbGFzcykpIHtcbiAgICAgIHdhcm5pbmdEaWFsb2cuY2xhc3NMaXN0LmFkZChqc29uRGF0YS53YXJuaW5nQ2xhc3MpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAod2FybmluZ0RpYWxvZy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xuICAgICAgd2FybmluZ0RpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuICB9XG4gIHZhciB3YXJuaW5nRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ0JvZHknKTtcbiAgdmFyIGNIVE1MID0gJyc7XG4gIHZhciBiYXNlID0gJyA8dHIgY2xhc3M9XFxcInt7dHlwZX19XFxcIj48dGQ+e3twbGFjZWd1aWR9fTwvdGQ+PHRkPnt7cmVxdWVzdFVSTH19PC90ZD48L3RyPic7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwganNvbkRhdGEuckxvZy5sZW5ndGg7IGkrKykge1xuICAgIGNIVE1MICs9IGJhc2U7XG4gICAgY0hUTUwgPSBjSFRNTC5yZXBsYWNlKCdcXHtcXHt0eXBlXFx9XFx9JywganNvbkRhdGEuckxvZ1tpXS50eXBlKTtcbiAgICBjSFRNTCA9IGNIVE1MLnJlcGxhY2UoJ1xce1xce3BsYWNlZ3VpZFxcfVxcfScsIGpzb25EYXRhLnJMb2dbaV0ucGxhY2VndWlkKTtcbiAgICBjSFRNTCA9IGNIVE1MLnJlcGxhY2UoJ1xce1xce3JlcXVlc3RVUkxcXH1cXH0nLCBqc29uRGF0YS5yTG9nW2ldLnVybCk7XG4gIH1cbiAgd2FybmluZ0RpYWxvZy5pbm5lckhUTUwgPSBjSFRNTDtcbn0iXX0=
